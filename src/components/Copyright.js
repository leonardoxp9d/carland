import { useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("Copyright");

  return (
    <div className="text-center py-10 border-t text-sm">
      Copyright &copy; Carland 2024. {t("rights")}.
    </div>
  );
}