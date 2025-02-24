"use client";
import Script from "next/script";
import { AuthProvider } from "../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />

      <link
        href="/admin/assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="/admin/assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link href="/admin/assets/vendor/quill/quill.snow.css" rel="stylesheet" />
      <link
        href="/admin/assets/vendor/quill/quill.bubble.css"
        rel="stylesheet"
      />
      <link
        href="/admin/assets/vendor/remixicon/remixicon.css"
        rel="stylesheet"
      />
      <link
        href="/admin/assets/vendor/simple-datatables/style.css"
        rel="stylesheet"
      />

      <link href="/admin/assets/css/style.css" rel="stylesheet" />

      {children}
      <Script
        src="/admin/assets/vendor/apexcharts/apexcharts.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/assets/vendor/chart.js/chart.umd.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/assets/vendor/echarts/echarts.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/assets/vendor/quill/quill.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/assets/vendor/simple-datatables/simple-datatables.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/assets/vendor/tinymce/tinymce.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/assets/vendor/php-email-form/validate.js"
        strategy="afterInteractive"
      />
      <Script src="/admin/assets/js/main.js" strategy="afterInteractive" />
    </AuthProvider>
  );
}
