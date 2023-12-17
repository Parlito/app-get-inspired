export type ProductNavigationProps = {
    id?: string;
  }
  
  export type OrderNavigationProps = {
    id: string;
  }
  
  export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        profile: undefined;
        favorites: undefined;
        donations: undefined;
        signIn: undefined;
        register: undefined;
      }
    }
  }