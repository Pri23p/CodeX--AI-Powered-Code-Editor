import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from "@/lib/db";
import UserButton from "@/modules/auth/components/user-button";

export default  async function Home() {
  return (
    <div>
      <Button>
        Get started
      </Button>
      <UserButton/>
    </div>

  );
}
