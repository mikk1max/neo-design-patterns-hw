import * as fs from "fs/promises";
import { buildAccessLogChain } from "./chain/chains/AccessLogChain";
import { buildTransactionChain } from "./chain/chains/TransactionChain";
import { buildSystemErrorChain } from "./chain/chains/SystemErrorChain";
import { ProcessingMediator } from "./mediator/ProcessingMediator";
import { AccessLogWriter } from "./mediator/writers/AccessLogWriter";
import { TransactionWriter } from "./mediator/writers/TransactionWriter";
import { ErrorLogWriter } from "./mediator/writers/ErrorLogWriter";
import { RejectedWriter } from "./mediator/writers/RejectedWriter";
import { DataRecord } from "./models/DataRecord";

const handlerMap = {
  access_log: buildAccessLogChain,
  transaction: buildTransactionChain,
  system_error: buildSystemErrorChain,
};

async function main() {
  const raw = await fs.readFile("src/data/records.json", "utf-8");
  const records: DataRecord[] = JSON.parse(raw);

  const mediator = new ProcessingMediator(
    new AccessLogWriter(),
    new TransactionWriter(),
    new ErrorLogWriter(),
    new RejectedWriter()
  );

  let success = 0;
  let rejected = 0;

  for (const record of records) {
    const builder = handlerMap[record.type];
    if (!builder) {
      mediator.onRejected(record, `Unknown record type: ${record.type}`);
      rejected++;
      continue;
    }
    try {
      const processed = builder().handle(record);
      mediator.onSuccess(processed);
      success++;
    } catch (err: unknown) {
      mediator.onRejected(record, err instanceof Error ? err.message : String(err));
      rejected++;
    }
  }

  await mediator.finalize();

  console.log(`[INFO] Завантажено записів: ${records.length}`);
  console.log(`[INFO] Успішно оброблено: ${success}`);
  console.log(`[WARN] Відхилено з помилками: ${rejected}`);
  console.log(`[INFO] Звіт збережено у директорії output/`);
}

main();
