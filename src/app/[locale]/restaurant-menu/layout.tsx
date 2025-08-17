import { Navbar } from "@/components/Navbar";
import PoweredBy from "@/components/PoweredBy";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <PoweredBy />
        </>
    );
}
