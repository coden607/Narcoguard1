"use client"

import Script from "next/script"

export default function PayPalButton() {
  return (
    <>
      <div id="paypal-container-V93EZUSZ7GVLW"></div>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAXXvKchMc6hgXGX0K_flnYbAEsffbx4TlPcTV6O3epK9hFZSqkPFjKscw7FrPBNA0U81fElUFCbfcmc4&components=hosted-buttons&enable-funding=venmo&currency=USD"
        onLoad={() => {
          // @ts-ignore
          if (window.paypal && window.paypal.HostedButtons) {
            // @ts-ignore
            window.paypal
              .HostedButtons({
                hostedButtonId: "V93EZUSZ7GVLW",
              })
              .render("#paypal-container-V93EZUSZ7GVLW")
          }
        }}
      />
    </>
  )
}
