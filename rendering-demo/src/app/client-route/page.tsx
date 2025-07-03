"use client"


import { useTheme } from "@/components/theme-provider";


const ClientRoutePage = () => {
  const theme = useTheme()

  const settings = {
    dots: true,
  };
  return (
    <>
         <h1 style={{color: theme.colors.primary}}>Client route page</h1>
      
    </>
  
  );
}

export default ClientRoutePage