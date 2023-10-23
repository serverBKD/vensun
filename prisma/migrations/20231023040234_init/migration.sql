-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Image" (
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "descript" TEXT,
    "marca" TEXT DEFAULT 'bkd',
    "modelo" TEXT,
    "img" TEXT,
    "warehouseId" INTEGER NOT NULL DEFAULT 0,
    "price1" REAL NOT NULL DEFAULT 0,
    "price2" REAL NOT NULL DEFAULT 0,
    "price3" REAL NOT NULL DEFAULT 0,
    "costo" REAL NOT NULL DEFAULT 0,
    "divisa" TEXT NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "Card_id_key" ON "Card"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Image_image_key" ON "Image"("image");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_serial_key" ON "Product"("serial");

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");
