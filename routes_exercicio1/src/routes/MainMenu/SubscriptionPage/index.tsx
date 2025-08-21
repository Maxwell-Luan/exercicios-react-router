import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import TextArea from "../../../components/TextArea";

export default function SubscriptionPage() {
  const buttonDescription = "Ver promoção";
  const textAreaDescription = "Página de inscrição";

  return (
    <main id="ms-page-container">
      <TextArea description={textAreaDescription} />
      <Link to="/promotion-page">
      <Button description={buttonDescription} />
      </Link>
      
    </main>
  );
}
