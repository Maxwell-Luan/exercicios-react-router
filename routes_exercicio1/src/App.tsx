import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./routes/MainMenu/HomePage";
import PromotionPage from "./routes/MainMenu/PromotionPage";
import SubscriptionPage from "./routes/MainMenu/SubscriptionPage";
import MainMenu from "./routes/MainMenu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu/>}>
          <Route index element={<HomePage />} />
          <Route path="promotion-page" element={<PromotionPage />} />
          <Route path="subscription-page" element={<SubscriptionPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
