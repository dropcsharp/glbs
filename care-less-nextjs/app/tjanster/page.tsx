import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Från hypnoterapi till reiki-healing till coachning - det går enkelt att boka det här. Välj välmående idag!",
  keywords: ["må bättre", "tjänster", "hypnoterapi", "reiki", "coachning"],
};

export default function TjansterPage() {
  redirect("/#booking");
}
