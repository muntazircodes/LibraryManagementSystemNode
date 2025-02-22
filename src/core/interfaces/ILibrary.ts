export interface ILibrary {
   createLibrary(
      data: {
         name: string;
         address: string;
         licenseNo: string;
         libraryDocuments: string;
         isVerified?: boolean;
      }
): Promise<any>;


updateLibrary(
   id: number,
   updateData: Partial<{
      name: string;
      address: string;
      licenseNo: string;
      libraryDocuments: string;
      isVerified: boolean;
   }>
): Promise<any>;

   getLibraryById(id: number): Promise<any | null>;

   deleteLibrary(id: number): Promise<boolean>;

   getAllLibraries(): Promise<any[]>;

}
