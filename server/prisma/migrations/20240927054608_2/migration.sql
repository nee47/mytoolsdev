-- CreateTable
CREATE TABLE "publicTools" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "publicTools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_categoryTopublicTools" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_categoryTopublicTools_AB_unique" ON "_categoryTopublicTools"("A", "B");

-- CreateIndex
CREATE INDEX "_categoryTopublicTools_B_index" ON "_categoryTopublicTools"("B");

-- AddForeignKey
ALTER TABLE "_categoryTopublicTools" ADD CONSTRAINT "_categoryTopublicTools_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoryTopublicTools" ADD CONSTRAINT "_categoryTopublicTools_B_fkey" FOREIGN KEY ("B") REFERENCES "publicTools"("id") ON DELETE CASCADE ON UPDATE CASCADE;
