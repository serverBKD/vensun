/*
  Warnings:

  - You are about to drop the column `descript` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "description" TEXT,
    "marca" TEXT DEFAULT 'bkd',
    "modelo" TEXT,
    "img" TEXT,
    "warehouseId" TEXT NOT NULL DEFAULT 'General',
    "price1" REAL NOT NULL DEFAULT 0,
    "price2" REAL NOT NULL DEFAULT 0,
    "price3" REAL NOT NULL DEFAULT 0,
    "costo" REAL NOT NULL DEFAULT 0,
    "divisa" TEXT NOT NULL DEFAULT 'USD',
    "stock" INTEGER NOT NULL DEFAULT 0,
    "unity" TEXT NOT NULL,
    "serial" TEXT,
    "barcode" TEXT,
    "sku" TEXT,
    "weigth" TEXT,
    "dimension" TEXT,
    "nota" TEXT,
    "tags" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Product" ("barcode", "costo", "createdAt", "dimension", "divisa", "fullname", "id", "img", "marca", "modelo", "nota", "price1", "price2", "price3", "serial", "sku", "stock", "tags", "unity", "updatedAt", "warehouseId", "weigth") SELECT "barcode", "costo", "createdAt", "dimension", "divisa", "fullname", "id", "img", "marca", "modelo", "nota", "price1", "price2", "price3", "serial", "sku", "stock", "tags", "unity", "updatedAt", "warehouseId", "weigth" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
CREATE UNIQUE INDEX "Product_serial_key" ON "Product"("serial");
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
