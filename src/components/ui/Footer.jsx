import zerodha from "../../assets/ZerodhaLogo.png";

const Footer = () => {  
  return (
    <footer className=" bg-zinc-50">
        <section className="grid md:grid-cols-4 gap-6 md:gap-4 p-8">
          <div className="logo flex flex-col gap-5">
            <div className="flex justify-center md:flex-none md:justify-normal">
              <img src={zerodha} className="size-2/3 h-fit mt-1" />
            </div>

            <p className=" text-sm text-gray-600 flex justify-center md:flex-none">
              © 2010 - 2024, Zerodha Broking Ltd.All rights reserved.
            </p>

            <div className="flex flex-row gap-4 ml-0 text-gray-600 justify-center md:justify-normal">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook bg-gray-600 "
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a></a>
            </div>
          </div>
          <div className="company text-gray-600 flex flex-col items-center md:flex-none md:items-start">
            <h1 className="text-2xl md:text-xl font-medium mb-4 ">Company</h1>
            <div className="foot flex flex-col gap-2 font-medium items-center md:items-start">
              <h1>About</h1>
              <h1>Products </h1>
              <h1>Pricing </h1>
              <h1>Referral programme </h1>
              <h1>Careers</h1>
              <h1>Zerodha.tech</h1>
              <h1>Press & media </h1>
              <h1>Zerodha Cares (CSR)</h1>
            </div>
          </div>
          <div className="Support text-gray-600 flex flex-col items-center md:flex-none md:items-start">
            <h1 className="text-2xl md:text-xl font-medium mb-4 ">Support</h1>
            <div className="foot flex flex-col gap-2 font-medium items-center md:items-start">
              <h1>Contact us</h1>
              <h1>Support portal </h1>
              <h1>Z-Connect blog </h1>
              <h1>List of charges </h1>
              <h1>Download & resources</h1>
              <h1>Videos</h1>
              <h1>Market overview </h1>
              <h1>How to file a complaint</h1>
              <h1>Status of your complaint</h1>
            </div>
          </div>
          <div className="account text-gray-600 flex flex-col items-center md:flex-none md:items-start">
            <h1 className="text-2xl md:text-xl font-medium mb-4 ">Account</h1>
            <div className="foot flex flex-col gap-2 font-medium items-center md:items-start">
              <h1>Open an account</h1>
              <h1>Fund transfer</h1>
            </div>
          </div>
        </section>

        <section className="foot2 flex flex-col px-7 text-gray-400 gap-4 text-xs ">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <a>complaints@zerodha.com</a>, for DP related to <a>dp@zerodha.com</a>.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a>SEBI SCORES</a>: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a>Smart Online Dispute Resolution</a> | <a>Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a>create a ticket here.</a>
          </p>
          <div className="foot flex justify-center  items-center flex-wrap gap-4 pb-6 pt-2 font-medium">
            <h1>NSE</h1>
            <h1>BSE</h1>
            <h1>MCX</h1>
            <h1>Terms and Conditions</h1>
            <h1>Policies & procedures </h1>
            <h1>Privacy policy </h1>
            <h1>Disclosure </h1>
            <h1>For investor's attention </h1>
            <h1>Investor charter</h1>
          </div>
        </section>
      </footer>
  );
}

export default Footer;