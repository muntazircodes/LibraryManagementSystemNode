export interface IBook {
   
   createBook(
      data: {
         title: string;
         isbn: string;
         libraryId: string;
         price?: number;
         volume?: string;
         image?: string;
      }
   ): Promise<any>;

   updateBook(
      id: number,
      updateData: Partial<{
         title: string;
         isbn: string;
         libraryId: string;
         price: number;
         volume: string;
         image: string;
      }>
   ): Promise<any>;
   
   getBookById(id: number): Promise<any | null>;

   deleteBook(id: number): Promise<boolean>;
   
   getAllBooks(): Promise<any[]>;

}
