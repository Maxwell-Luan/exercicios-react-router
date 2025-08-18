import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import TextArea from "../../../components/TextArea";

export default function PromotionPage() {
  const buttonDescription = "Quero participar";
  const textAreaDescription = "Página de promoção";

  return (
    <main id="ms-page-container">
      <TextArea description={textAreaDescription} />
      <Link to="/subscription-page">
        <Button description={buttonDescription} />
      </Link>
    </main>
  );
}
