/*
  Warnings:

  - You are about to drop the column `costo` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price1` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price2` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price3` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `warehouseId` on the `Product` table. All the data in the column will be lost.

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
    "warehouse" TEXT NOT NULL DEFAULT 'General',
    "price_base" REAL NOT NULL DEFAULT 0,
    "price_sell" REAL NOT NULL DEFAULT 0,
    "divisa" TEXT DEFAULT 'USD',
    "stock" INTEGER NOT NULL DEFAULT 0,
    "unity" TEXT,
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
INSERT INTO "new_Product" ("barcode", "createdAt", "description", "dimension", "divisa", "fullname", "id", "img", "marca", "modelo", "nota", "serial", "sku", "stock", "tags", "unity", "updatedAt", "weigth") SELECT "barcode", "createdAt", "description", "dimension", "divisa", "fullname", "id", "img", "marca", "modelo", "nota", "serial", "sku", "stock", "tags", "unity", "updatedAt", "weigth" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
CREATE UNIQUE INDEX "Product_serial_key" ON "Product"("serial");
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
