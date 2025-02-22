export interface IUser {

   createUser(
      data: {
         name: string;
         email: string;
         address: string;
         password: string;
         userRole: string;
         fine: number;
         issuedBooks: number;
         validDocuments: string;
         isVerified: boolean;
      }
   ): Promise<any>;

   updateUser (
      userId: string, 
      updateData: Partial<{
         name: string;
         email: string;
         address: string;
         password: string;
         userRole: string;
         fine: number;
         issuedBooks: number;
         validDocuments: string;
         isVerified: boolean;
      }>
   ): Promise<any>;

   getUserById(userId: string): Promise<any | null>;

   deleteUser(userId: string): Promise<boolean>;

   getAllUsers(): Promise<any[]>;

   getUserByEmail(email: string): Promise<any | null>;

   getDefaulterUsers(): Promise<any[]>;

   getVerifiedUsers(): Promise<any[]>;
}