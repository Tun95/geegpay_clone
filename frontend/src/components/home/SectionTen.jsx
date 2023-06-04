import React from "react";
import "./styles.scss";
import Faq from "react-faq-component";
import { Fade } from "react-awesome-reveal";

function SectionTen() {
  const data = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: (
          <h4 className="faq_questions">
            How long does it take to get my virtual bank account?
          </h4>
        ),
        content: <p className="faq_answers">It is instant.</p>,
      },
      {
        title: (
          <h4 className="faq_questions">
            What's the fee for receiving in my account?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            You're charged only 0.9% when you received fund in your virtual bank
            account The minimum charges is $1.5.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            What's the fee for converting with in currency?
          </h4>
        ),
        content: <p className="faq_answers">Our conversion fee is zero.</p>,
      },
      {
        title: (
          <h4 className="faq_questions">
            Can I use my USD account on Upwork, Deel, Fiverr, or Payoneer?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            Yes, it can be used on any platform that accepts USD bank account.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            How long does it take to be verified?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            Account verification is instant for International Passport, Driver's
            License and Voter's Card. NIN can take between 24 - 48 hours.
          </p>
        ),
      },
      {
        title: <h4 className="faq_questions">Where can I transfer to?</h4>,
        content: (
          <p className="faq_answers">
            You can transfer to local bank accounts in Nigeria & Wise.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            Can I use my Virtual Account to receive funds outside the US?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            No, you can only receive funds with your virtual account within the
            US or only via US banks.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            How long does it take for a transfer to reflect in my Virtual
            Account?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            It takes 1 - 2 business days. This also depends on the payment
            method used by the sender.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            Where can I use my virtual USD card?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            Our virtual USD cards are accepted across millions of websites.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            What is my Virtual USD card billing address?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            641 North Broad Street, Suite 206, Middletown ,19709 Delaware, USA.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            Why is my USD bank account number more than 10 digits?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            US bank accounts can be from 6 to 17 digits.
          </p>
        ),
      },
      {
        title: (
          <h4 className="faq_questions">
            Does my USD bank account support ACH deposits?
          </h4>
        ),
        content: <p className="faq_answers">Yes, it does.</p>,
      },
      {
        title: (
          <h4 className="faq_questions">
            Can I have more than one Geegpay account profile?
          </h4>
        ),
        content: (
          <p className="faq_answers">
            No, you can only create one account profile. More than one account
            is not allowed. If users try to create more than one account
            profile, the accounts will be suspended immediately.
          </p>
        ),
      },
      {
        title: <h4 className="faq_questions">Is Geegpay secure?</h4>,
        content: (
          <p className="faq_answers">
            Yes! We utilise industry-standard security protocols that leverage
            encryption for transferring data. Encryption helps create a secure
            environment for the information being transferred, and we ensure
            that account data is never stored on your device!
          </p>
        ),
      },
    ],
  };

  const styles = {
    rowTitleColor: "#152c5b",
    rowContentColor: "#8a95ad",
    rowContentPaddingTop: "20px",
    rowContentPaddingBottom: "15px",
  };

  const config = {
    animate: true,
    arrowIcon: <i className="fa-solid fa-chevron-down h_flex"></i>,
    tabFocus: true,
  };
  return (
    <section className="section_10">
      <div className="section_content container">
        <div className="content">
          <div className=" box_1">
            <div className="box_content">
              <Fade cascade direction="up" triggerOnce damping={0.1}>
                <h6>QUESTIONS</h6>
                <h2>Frequently asked questions</h2>
                <p className="">
                  Get answers to all questions you have <br /> and boost your
                  knowledge about Geegpay.
                </p>
              </Fade>
            </div>
          </div>
          <div className="box_2 s_flex">
            <div className="box_content ">
              <Faq data={data} styles={styles} config={config} />
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTen;
