import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from "@/assets/img/bg/breadcrumb_bg01.jpg";
import brd_img from "@/assets/img/others/breadcrumb_img02.png";
import ServiceDetailsArea from "../components/service-details/service-details-area";
import LeonInfo from "../components/leon/leon-info";
import LeonFaqArea from "../components/leon/leon-faq"
import FaqArea from "../components/faq/faq-area";

export const metadata: Metadata = {
  title: "Services Details Page",
};

export default function ServiceDetailsPage() {
  return (
    <Wrapper>

      {/* services details area start */}
      <LeonInfo />
      {/* services details area end */}

      {/* faq area start */}
      <LeonFaqArea />
      {/* faq area end */}

    </Wrapper>
  );
}
