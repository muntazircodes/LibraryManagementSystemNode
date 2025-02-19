export interface IRack{
   createRack(data: {
      name: string;
      libraryId: number;
      isVerified?: boolean;
   }): Promise<any>;

   getRackById(id: number): Promise<any | null>;

   updateRack(
      id: number,
      updateData: Partial<{
         name: string;
         libraryId: number;
         isVerified: boolean;
      }>
   ): Promise<any>;

   deleteRack(id: number): Promise<boolean>;

   getAllRacks(): Promise<any[]>;
}