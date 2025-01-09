import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {

    title: "Privacy Policy | Medcode",
    description: `In order to receive information about your Personal Data, the purposes
          and the parties the Data is shared with, contact the Owner`,
    openGraph: {
      title: "Privacy Policy | Medcode",
      description: `In order to receive information about your Personal Data, the purposes
          and the parties the Data is shared with, contact the Owner`,
    },
  
}
export default function Privacy() {
  return (
    <article className="container p-16 mx-auto px-8 py-40  xl:pt-44 xs:pt-24">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Privacy Policy of www.medcode.dev
        </h1>
        <p className="mb-4">
          In order to receive information about your Personal Data, the purposes
          and the parties the Data is shared with, contact the Owner.
        </p>
        <h2 className="text-2xl font-bold mb-2">Owner and Data Controller</h2>
        <p className="mb-4">
          The owner does not provide a list of Personal Data types collected.
          Complete details on each type of Personal Data collected are provided
          in the dedicated sections of this privacy policy or by specific
          explanation texts displayed prior to the Data collection. Personal
          Data may be freely provided by the User, or, in case of Usage Data,
          collected automatically when using this Application. Unless specified
          otherwise, all Data requested by this Application is mandatory and
          failure to provide this Data may make it impossible for this
          Application to provide its services. In cases where this Application
          specifically states that some Data is not mandatory, Users are free
          not to communicate this Data without consequences to the availability
          or the functioning of the Service. Users who are uncertain about which
          Personal Data is mandatory are welcome to contact the Owner. Any use
          of Cookies – or of other tracking tools — by this Application or by
          the owners of third-party services used by this Application serves the
          purpose of providing the Service required by the User, in addition to
          any other purposes described in the present document and in the Cookie
          Policy. Users are responsible for any third-party Personal Data
          obtained, published or shared through this Application.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Mode and place of processing the Data
        </h2>
        <span className="font-semibold">Methods of processing</span>
        <p className="mb-4">
          The Owner takes appropriate security measures to prevent unauthorized
          access, disclosure, modification, or unauthorized destruction of the
          Data. The Data processing is carried out using computers and/or IT
          enabled tools, following organizational procedures and modes strictly
          related to the purposes indicated. In addition to the Owner, in some
          cases, the Data may be accessible to certain types of persons in
          charge, involved with the operation of this Application
          (administration, sales, marketing, legal, system administration) or
          external parties (such as third-party technical service providers,
          mail carriers, hosting providers, IT companies, communications
          agencies) appointed, if necessary, as Data Processors by the Owner.
          The updated list of these parties may be requested from the Owner at
          any time.
        </p>
        <span className="font-semibold">Place</span>
        <p className="mb-4">
          The Data is processed at the Owners operating offices and in any other
          places where the parties involved in the processing are located.
        </p>
        <p className="mb-2">
          Depending on the Users location, data transfers may involve
          transferring the Users Data to a country other than their own. To find
          out more about the place of processing of such transferred Data, Users
          can check the section containing details about the processing of
          Personal Data
        </p>
        <span className="font-semibold">Retention time</span>
        <p className="mb-2">
          Unless specified otherwise in this document, Personal Data shall be
          processed and stored for as long as required by the purpose they have
          been collected for and may be retained for longer due to applicable
          legal obligation or based on the Users’ consent.
        </p>
        <span className="text-xl font-semibold">Cookie Policy</span>
        <p className="mb-2">
          This Application uses Trackers. To learn more, Users may consult the
          Cookie Policy.
        </p>
        <span className="text-xl mb-6 font-semibold">
          Further Information for Users
        </span>
        <span className="font-semibold">
          Legal basis of processing The Owner may process Personal Data relating
          to Users if one of the following applies:
        </span>
        <ul className="list-disc list-inside mb-4">
          <li>
            Users have given their consent for one or more specific purposes.
          </li>
          <li>
            provision of Data is necessary for the performance of an agreement
            with the User and/or for any pre-contractual obligations thereof;
          </li>
          <li>
            processing is necessary for compliance with a legal obligation to
            which the Owner is subject;
          </li>
          <li>
            processing is related to a task that is carried out in the public
            interest or in the exercise of official authority vested in the
            Owner;
          </li>
          <li>
            processing is necessary for the purposes of the legitimate interests
            pursued by the Owner or by a third party.
          </li>
        </ul>
        <p>
          In any case, the Owner will gladly help to clarify the specific legal
          basis that applies to the processing, and in particular whether the
          provision of Personal Data is a statutory or contractual requirement,
          or a requirement necessary to enter into a contract.
        </p>
        <span className="font-semibold">
          Further information about retention time
        </span>
        <p>
          Unless specified otherwise in this document, Personal Data shall be
          processed and stored for as long as required by the purpose they have
          been collected for and may be retained for longer due to applicable
          legal obligation or based on the Users’ consent.
        </p>
        <p>Therefore: :</p>
        <ul className="list-disc list-inside ">
          <li>
            Personal Data collected for purposes related to the performance of a
            contract between the Owner and the User shall be retained until such
            contract has been fully performed.
          </li>
          <li>
            Personal Data collected for the purposes of the Owner’s legitimate
            interests shall be retained as long as needed to fulfill such
            purposes. Users may find specific information regarding the
            legitimate interests pursued by the Owner within the relevant
            sections of this document or by contacting the Owner.
          </li>
        </ul>
        <p>
          The Owner may be allowed to retain Personal Data for a longer period
          whenever the User has given consent to such processing, as long as
          such consent is not withdrawn. Furthermore, the Owner may be obliged
          to retain Personal Data for a longer period whenever required to
          fulfil a legal obligation or upon order of an authority. Once the
          retention period expires, Personal Data shall be deleted. Therefore,
          the right of access, the right to erasure, the right to rectification
          and the right to data portability cannot be enforced after expiration
          of the retention period.
        </p>
        <span className="font-semibold">
          The rights of Users based on the General Data Protection Regulation
          (GDPR){" "}
        </span>
        <p>
          Users may exercise certain rights regarding their Data processed by
          the Owner. In particular, Users have the right to do the following, to
          the extent permitted by law:
        </p>
        <ul className="list-disc list-inside ">
          <li>
            Withdraw their consent at any time. Users have the right to withdraw
            consent where they have previously given their consent to the
            processing of their Personal Data.
          </li>
          <li>
            Object to processing of their Data. Users have the right to object
            to the processing of their Data if the processing is carried out on
            a legal basis other than consent.
          </li>
          <li>
            Access their Data. Users have the right to learn if Data is being
            processed by the Owner, obtain disclosure regarding certain aspects
            of the processing and obtain a copy of the Data undergoing
            processing.
          </li>
          <li>
            Verify and seek rectification. Users have the right to verify the
            accuracy of their Data and ask for it to be updated or corrected.
          </li>
          <li>
            Restrict the processing of their Data. Users have the right to
            restrict the processing of their Data. In this case, the Owner will
            not process their Data for any purpose other than storing it.
          </li>
          <li>
            Have their Personal Data deleted or otherwise removed. Users have
            the right to obtain the erasure of their Data from the Owner
          </li>
          <li>
            Receive their Data and have it transferred to another controller.
            Users have the right to receive their Data in a structured, commonly
            used and machine readable format and, if technically feasible, to
            have it transmitted to another controller without any hindrance.
          </li>
          <li>
            Lodge a complaint. Users have the right to bring a claim before
            their competent data protection authority.
          </li>
        </ul>
        <p>
          Users are also entitled to learn about the legal basis for Data
          transfers abroad including to any international organization governed
          by public international law or set up by two or more countries, such
          as the UN, and about the security measures taken by the Owner to
          safeguard their Data.
        </p>
        <p className="font-bold mt-2">
          Details about the right to object to processing Where Personal Data is
          processed for a public interest, in the exercise of an official
          authority vested in the Owner or for the purposes of the legitimate
          interests pursued by the Owner, Users may object to such processing by
          providing a ground related to their particular situation to justify
          the objection.
        </p>
        <p className="font-bold mt-4">
          Users must know that, however, should their Personal Data be processed
          for direct marketing purposes, they can object to that processing at
          any time, free of charge and without providing any justification.
          Where the User objects to processing for direct marketing purposes,
          the Personal Data will no longer be processed for such purposes. To
          learn whether the Owner is processing Personal Data for direct
          marketing purposes, Users may refer to the relevant sections of this
          document.
        </p>
        <span className="font-bold mt-3 mb-3">
          How to exercise these rights
        </span>
        <p>
          Any requests to exercise User rights can be directed to the Owner
          through the contact details provided in this document. Such requests
          are free of charge and will be answered by the Owner as early as
          possible and always within one month, providing Users with the
          information required by law. Any rectification or erasure of Personal
          Data or restriction of processing will be communicated by the Owner to
          each recipient, if any, to whom the Personal Data has been disclosed
          unless this proves impossible or involves disproportionate effort. At
          the Users’ request, the Owner will inform them about those recipients.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Further information for Users in Switzerland
        </h2>
        <p>
          This section applies to Users in Switzerland, and, for such Users,
          supersedes any other possibly divergent or conflicting information
          contained in the privacy policy. Further details regarding the
          categories of Data processed, the purposes of processing, the
          categories of recipients of the personal data, if any, the retention
          period and further information about Personal Data can be found in the
          section titled “Detailed information on the processing of Personal
          Data” within this document.
        </p>
        <span className="text-sm font-bold mb-3">
          The rights of Users according to the Swiss Federal Act on Data
          Protection{" "}
        </span>
        <p>
          Users may exercise certain rights regarding their Data within the
          limits of law, including the following:
        </p>
        <ul className="list-disc list-inside ">
          <li>right of access to Personal Data;</li>
          <li>
            right to object to the processing of their Personal Data (which also
            allows Users to demand that processing of Personal Data be
            restricted, Personal Data be deleted or destroyed, specific
            disclosures of Personal Data to third parties be prohibited);
          </li>
          <li>
            right to receive their Personal Data and have it transferred to
            another controller (data portability)
          </li>
          <li>right to ask for incorrect Personal Data to be corrected.</li>
        </ul>
        <span className="font-bold mt-3 mb-3">
          How to exercise these rights
        </span>
        <p>
          Any requests to exercise User rights can be directed to the Owner
          through the contact details provided in this document. Such requests
          are free of charge and will be answered by the Owner as early as
          possible, providing Users with the information required by law
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Futher information for California consumers
        </h2>
        <p>
          This section of the document integrates with and supplements the
          information contained in the rest of the privacy policy and is
          provided by the business running this Application and, if the case may
          be, its parent, subsidiaries and affiliates (for the purposes of this
          section referred to collectively as “we”, “us”, “our”). This section
          applies to all Users (Users are referred to below, simply as “you”,
          “your”, “yours”), who are consumers residing in the state of
          California, United States of America, according to the California
          Consumer Privacy Act of 2018 as updated by the California Privacy
          Rights and subsequent regulations. For such consumers, this section
          supersedes any other possibly divergent or conflicting information
          contained in the privacy policy. This part of the document uses the
          term “personal information“ as defined in the California Consumer
          Privacy Act (CCPA/CPRA).
        </p>
        <span className="font-bold mb-2 mt-3">
          Categories of personal information collected, used, sold, or shared
        </span>
        <p>
          In this section we summarize the categories of personal information
          that weve collected, used, sold, or shared and the purposes thereof.
          You can read about these activities in detail in the section titled
          “Detailed information on the processing of Personal Data” within this
          document.
        </p>
        <span className="font-bold mb-2 mt-3">
          Information we collect: the categories of personal information we
          collect
        </span>
        <p className="py-2">
          We have collected the following categories of personal information
          about you: . We do not collect sensitive personal information. We will
          not collect additional categories of personal information without
          notifying you.
        </p>
        <span className="font-bold mb-2 mt-3">
          What are the purposes for which we use your personal information?
        </span>
        <p>
          We may use your personal information to allow the operational
          functioning of this Application and features thereof (“business
          purposes”). In such cases, your personal information will be processed
          in a fashion necessary and proportionate to the business purpose for
          which it was collected, and strictly within the limits of compatible
          operational purposes. We may also use your personal information for
          other reasons such as for commercial purposes (as indicated within the
          section “Detailed information on the processing of Personal Data”
          within this document), as well as for complying with the law and
          defending our rights before the competent authorities where our rights
          and interests are threatened or we suffer an actual damage. We won’t
          process your information for unexpected purposes, or for purposes
          incompatible with the purposes originally disclosed, without your
          consent.
        </p>
        <span className="font-bold mb-2 mt-3">
          How long do we keep your personal information?
        </span>
        <p>
          Unless stated otherwise inside the “Detailed information on the
          processing of Personal Data” section, we will not retain your personal
          information for longer than is reasonably necessary for the purpose(s)
          they have been collected for.
        </p>
        <span className="font-bold mb-2 mt-3">
          How we collect information: what are the sources of the personal
          information we collect?
        </span>
        <p>
          We collect the above-mentioned categories of personal information,
          either directly or indirectly, from you when you use this Application.
          For example, you directly provide your personal information when you
          submit requests via any forms on this Application. You also provide
          personal information indirectly when you navigate this Application, as
          personal information about you is automatically observed and
          collected.
        </p>
        <span className="font-bold mb-2 mt-3">
          How we use the information we collect: disclosing of your personal
          information with third parties for a business purpose
        </span>
        <p>
          We do not disclose your personal information to third parties. For our
          purposes, the word “third party” means “a person who is not any of the
          following: a service provider or a contractor, as defined by the CCPA.
        </p>
        <span className="font-bold mb-2 mt-3">
          No sale of your personal information
        </span>
        <p>
          We do not sell or share your personal information. In case we should
          decide to, we will inform you beforehand and will grant your right to
          opt out of such sale.
        </p>
        <span className="font-bold mb-2 mt-3">
          Your privacy rights under the California Consumer Privacy Act and how
          to exercise them
        </span>
        <span className="font-bold mb-2 mt-3">
          The right to access personal information: the right to know and to
          portability
        </span>
        <p>You have the right to request that we disclose to you:</p>
        <ul className="list-disc list-inside ">
          <li>
            the categories of personal information that we collect about you
          </li>
          <li>the purposes for which we use your information;</li>
          <li>the sources from which the personal information is collected;</li>
          <li>to whom we disclose such information;</li>
          <li>
            the specific pieces of personal information we have collected about
            you.
          </li>
        </ul>
        <p>
          You also have the right to know what personal information is sold or
          shared and to whom. In particular, you have the right to request two
          separate lists from us where we disclose:
        </p>
        <ul>
          <li>
            the categories of personal information that we sold or shared about
            you and the categories of third parties to whom the personal
            information was sold or shared;
          </li>
          <li>
            the categories of personal information that we disclosed about you
            for a business purpose and the categories of persons to whom it was
            disclosed for a business purpose
          </li>
        </ul>
        <p>
          The disclosure described above will be limited to the personal
          information collected or used over the past 12 months. If we deliver
          our response electronically, the information enclosed will be
          portable, i.e. delivered in an easily usable format to enable you to
          transmit the information to another entity without hindrance —
          provided that this is technically feasible.
        </p>
        <span className="font-bold mb-2 mt-3">
          The right to correct inaccurate personal information
        </span>
        <p>
          You have the right to request that we correct any inaccurate personal
          information we maintain about you, taking into account the nature of
          the personal information and the purposes of the processing of the
          personal information.
        </p>
        <span className="font-bold mb-2 mt-3">
          The right to opt out of sale or sharing of personal information and to
          limit the use of your sensitive personal information
        </span>
        <p>
          You have the right to opt out of the sale or sharing of your personal
          information. You also have the right to request that we limit our use
          or disclosure of your sensitive personal information.
        </p>
        <span className="font-bold mb-2 mt-3">
          The right of no retaliation following opt-out or exercise of other
          rights (the right to non-discrimination)
        </span>
        <p>
          We will not discriminate against you for exercising your rights under
          the CCPA. This means that we will not discriminate against you,
          including, but not limited to, by denying goods or services, charging
          you a different price, or providing a different level or quality of
          goods or services just because you exercised your consumer privacy
          rights. However, if you refuse to provide your personal information to
          us or ask us to delete or stop selling your personal information, and
          that personal information or sale is necessary for us to provide you
          with goods or services, we may not be able to complete that
          transaction. To the extent permitted by the law, we may offer you
          promotions, discounts, and other deals in exchange for collecting,
          keeping, or selling your personal information, provided that the
          financial incentive offered is reasonably related to the value of your
          personal information.
        </p>
        <span className="font-bold mb-2 mt-3">How to exercise your rights</span>
        <p>
          To exercise the rights described above, you need to submit your
          verifiable request to us by contacting us via the details provided in
          this document. For us to respond to your request, it’s necessary that
          we know who you are. Therefore, you can only exercise the above rights
          by making a verifiable request which must:
        </p>
        <ul className="py-4">
          <li>
            provide sufficient information that allows us to reasonably verify
            you are the person about whom we collected personal information or
            an authorized representative
          </li>
          <li>
            describe your request with sufficient detail that allows us to
            properly understand, evaluate, and respond to it.
          </li>
        </ul>
        <p className="mt-2 mb-3">
          We will not respond to any request if we are unable to verify your
          identity and therefore confirm the personal information in our
          possession actually relates to you. Making a verifiable consumer
          request does not require you to create an account with us. We will use
          any personal information collected from you in connection with the
          verification of your request solely for the purposes of verification
          and shall not further disclose the personal information, retain it
          longer than necessary for purposes of verification, or use it for
          unrelated purposes. If you cannot personally submit a verifiable
          request, you can authorize a person registered with the California
          Secretary of State to act on your behalf. If you are an adult, you can
          make a verifiable request on behalf of a child under your parental
          authority. You can submit a maximum number of 2 requests over a period
          of 12 months.
        </p>
        <span className="font-bold mb-2 mt-3">
          How and when we are expected to handle your request
        </span>
        <p>
          We will confirm receipt of your verifiable request within 10 days and
          provide information about how we will process your request. We will
          respond to your request within 45 days of its receipt. Should we need
          more time, we will explain to you the reasons why, and how much more
          time we need. In this regard, please note that we may take up to 90
          days to fulfill your request. Our disclosure(s) will cover the
          preceding 12-month period. Only with regard to personal information
          collected on or after January 1, 2022, you have the right to request
          that we disclose information beyond the 12-month period, and we will
          provide them to you unless doing so proves impossible or would involve
          a disproportionate effort. Should we deny your request, we will
          explain you the reasons behind our denial. We do not charge a fee to
          process or respond to your verifiable request unless such request is
          manifestly unfounded or excessive. In such cases, we may charge a
          reasonable fee, or refuse to act on the request. In either case, we
          will communicate our choices and explain the reasons behind it.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Further information for Virginia consumers
        </h2>
        <p>
          This section of the document integrates with and supplements the
          information contained in the rest of the privacy policy and is
          provided by the controller running this Application and, if the case
          may be, its parent, subsidiaries and affiliates (for the purposes of
          this section referred to collectively as “we”, “us”, “our”). This
          section applies to all Users (Users are referred to below, simply as
          “you”, “your”, “yours”), who are consumers residing in the
          Commonwealth of Virginia, according to the “Virginia Consumer Data
          Protection Act and, for such consumers, it supersedes any other
          possibly divergent or conflicting information contained in the privacy
          policy. This part of the document uses the term “personal data” as
          defined in the VCDPA
        </p>
        <span className="font-bold mb-2 mt-3">
          Categories of personal data processed
        </span>
        <p>
          In this section, we summarize the categories of personal data that
          weve processed and the purposes thereof. You can read about these
          activities in detail in the section titled “Detailed information on
          the processing of Persona Data” within this document.
        </p>
        <span className="font-bold mb-2 mt-3">
          Categories of personal data we collect
        </span>
        <p>We have collected the following categories of personal data:</p>
        <p>We do not collect sensitive data.</p>
        <p>
          We will not collect additional categories of personal data without
          notifying you.
        </p>
        <span className="font-bold mb-2 mt-3">
          Why we process your personal data
        </span>
        <p className="mb-3">
          To find out why we process your personal data, you can read the
          sections titled “Detailed information on the processing of Personal
          Data” and “The purposes of processing” within this document. We won’t
          process your information for unexpected purposes, or for purposes
          incompatible with the purposes originally disclosed, without your
          consent. You can freely give, deny, or withdraw such consent at any
          time using the contact details provided in this document.
        </p>
        <p>
          How we use the data we collect: sharing of your personal data with
          third parties We do not share nor disclose your personal data with
          third parties. Sale of your personal data We do not sell your personal
          data. In case we should decide to, we will inform you beforehand and
          will grant your right to opt out of such sale. Processing of your
          personal data for targeted advertising We do not process your personal
          data for targeted advertising. If we decide to do so, we will inform
          you beforehand and will grant your right to opt out of the processing
          of your personal data for targeted advertising. Your privacy rights
          under the Virginia Consumer Data Protection Act and how to exercise
          them You may exercise certain rights regarding your data processed by
          us. In particular, you have the right to do the following: access
          personal data: the right to know. You have the right to request that
          we confirm whether or not we are processing your personal data. You
          also have the right to access such personal data. correct inaccurate
          personal data. You have the right to request that we correct any
          inaccurate personal data we maintain about you, taking into account
          the nature of the personal data and the purposes of the processing of
          the personal data. request the deletion of your personal data. You
          have the right to request that we delete any of your personal data.
          obtain a copy of your personal data. We will provide your personal
          data in a portable and usable format that allows you to transfer data
          easily to another entity — provided that this is technically feasible.
          opt out of the processing of your personal data for the purposes of
          targeted advertising, the sale of personal data, or profiling in
          furtherance of decisions that produce legal or similarly significant
          effects concerning you. non-discrimination. We will not discriminate
          against you for exercising your rights under the VCDPA. This means
          that we will not, among other things, deny goods or services, charge
          you a different price, or provide a different level or quality of
          goods or services just because you exercised your consumer privacy
          rights. However, if you refuse to provide your personal data to us or
          ask us to delete or stop selling your personal data, and that personal
          data or sale is necessary for us to provide you with goods or
          services, we may not be able to complete that transaction. To the
          extent permitted by the law, we may offer a different price, rate,
          level, quality, or selection of goods or services to you, including
          offering goods or services for no fee, if you have exercised your
          right to opt out, or our offer is related to your voluntary
          participation in a bona fide loyalty, rewards, premium features,
          discounts, or club card program. How to exercise your rights To
          exercise the rights described above, you need to submit your request
          to us by contacting us via the contact details provided in this
          document. For us to respond to your request, we need to know who you
          are. We will not respond to any request if we are unable to verify
          your identity using commercially reasonable efforts and therefore
          confirm that the personal data in our possession actually relate to
          you. In such cases, we may request that you provide additional
          information which is reasonably necessary to authenticate you and your
          request. Making a consumer request does not require you to create an
          account with us. However, we may require you to use your existing
          account. We will use any personal data collected from you in
          connection with your request solely for the purposes of
          authentication, without further disclosing the personal data,
          retaining it longer than necessary for purposes of authentication, or
          using it for unrelated purposes. If you are an adult, you can make a
          request on behalf of a child under your parental authority. How and
          when we are expected to handle your request We will respond to your
          request without undue delay, but in all cases and at the latest within
          45 days of its receipt. Should we need more time, we will explain to
          you the reasons why, and how much more time we need. In this regard,
          please note that we may take up to 90 days to fulfill your request.
          Should we deny your request, we will explain to you the reasons behind
          our denial without undue delay, but in all cases and at the latest
          within 45 days of receipt of the request. It is your right to appeal
          such decision by submitting a request to us via the details provided
          in this document. Within 60 days of receipt of the appeal, we will
          inform you in writing of any action taken or not taken in response to
          the appeal, including a written explanation of the reasons for the
          decisions. If the appeal is denied you may contact the Attorney
          General to submit a complaint. We do not charge a fee to respond to
          your request, for up to two requests per year. If your request is
          manifestly unfounded, excessive or repetitive, we may charge a
          reasonable fee or refuse to act on the request. In either case, we
          will communicate our choices and explain the reasons behind them.
          Further information for Colorado consumers This section of the
          document integrates with and supplements the information contained in
          the rest of the privacy policy and is provided by the controller
          running this Application and, if the case may be, its parent,
          subsidiaries and affiliates (for the purposes of this section referred
          to collectively as “we”, “us”, “our”). This section applies to all
          Users (Users are referred to below, simply as “you”, “your”, “yours”),
          who are consumers residing in the State of Colorado, according to the
          “Colorado Privacy Act (the CPA), and, for such consumers, it
          supersedes any other possibly divergent or conflicting information
          contained in the privacy policy. This part of the document uses the
          term “personal data” as defined in the CPA. Categories of personal
          data processed In this section, we summarize the categories of
          personal data that weve processed and the purposes thereof. You can
          read about these activities in detail in the section titled “Detailed
          information on the processing of Persona Data” within this document.
          Categories of personal data we collect We have collected the following
          categories of personal data: We do not collect sensitive data. We will
          not collect additional categories of personal data without notifying
          you. Why we process your personal data To find out why we process your
          personal data, you can read the sections titled “Detailed information
          on the processing of Personal Data” and “The purposes of processing”
          within this document. We won’t process your information for unexpected
          purposes, or for purposes incompatible with the purposes originally
          disclosed, without your consent. You can freely give, deny, or
          withdraw such consent at any time using the contact details provided
          in this document. How we use the data we collect: sharing of your
          personal data with third parties We do not share nor disclose your
          personal data with third parties. For our purposes, the word third
          party means a natural or legal person, public authority, agency, or
          body other than the consumer, controller, processor, or an affiliate
          of the processor or the controller as defined by the VCDPA. For our
          purposes, the word third party means a person, public authority,
          agency, or body other than a consumer, controller, processor, or
          affiliate of the processor or the controller as defined by the CPA.
          Sale of your personal data We do not sell your personal data. In case
          we should decide to, we will inform you beforehand and will grant your
          right to opt out of such sale. For our purposes, the word sale, sell,
          or sold means the exchange of personal data for monetary or other
          valuable consideration by a controller to a third party as defined by
          the CPA. Please note that according to the CPA, the disclosure of
          personal data to a processor that processes personal data on behalf of
          a controller does not constitute a sale. In addition, other specific
          exceptions set forth in the CPA may apply, such as, but not limited
          to, the disclosure of personal data to a third party for the provision
          of a product or service requested by you. Processing of your personal
          data for targeted advertising We do not process your personal data for
          targeted advertising. If we decide to do so, we will inform you
          beforehand and will grant your right to opt out of the processing of
          your personal data for targeted advertising. For our purposes, the
          word targeted advertising means displaying to a consumer an
          advertisement that is selected based on personal data obtained or
          inferred over time from the consumers activities across nonaffiliated
          websites, applications, or online services to predict consumer
          preferences or interests as defined by CPA. Please note that according
          to the CPA, targeted advertising does not include: “advertisements
          directed to a consumer in response to the consumers request for
          information or feedback; advertisements based on activities within a
          controllers own websites or online applications or any affiliated
          website or online application; advertisements based on the context of
          a consumers current search query, visit to an internet web site or
          online application; or processing personal data solely to measure or
          report advertising frequency, performance or reach”. Your privacy
          rights under the Colorado Privacy Act and how to exercise them You may
          exercise certain rights regarding your data processed by us. In
          particular, you have the right to do the following: opt out of the
          processing of your personal data for the purposes of targeted
          advertising, the sale of personal data, or profiling in furtherance of
          decisions that produce legal or similarly significant effects
          concerning you. access personal data. You have the right to request
          that we confirm whether or not we are processing your personal data.
          You also have the right to access such personal data. correct
          inaccurate personal data. You have the right to request that we
          correct any inaccurate personal data we maintain about you, taking
          into account the nature of the personal data and the purposes of the
          processing of the personal data. request the deletion of your personal
          data. You have the right to request that we delete any of your
          personal data. obtain a copy of your personal data. We will provide
          your personal data in a portable and usable format that allows you to
          transfer data easily to another entity – provided that this is
          technically feasible. In any case, we will not increase the cost of,
          or decrease the availability of, a product or service, based solely on
          the exercise of any of your rights and unrelated to the feasibility or
          the value of a service. However, to the extent permitted by the law,
          we may offer a different price, rate, level, quality, or selection of
          goods or services to you, including offering goods or services for no
          fee, if our offer is related to your voluntary participation in a bona
          fide loyalty, rewards, premium features, discounts, or club card
          program. How to exercise your rights To exercise the rights described
          above, you need to submit your request to us by contacting us via the
          contact details provided in this document. For us to respond to your
          request, we need to know who you are and which right you wish to
          exercise. We will not respond to any request if we are unable to
          verify your identity using commercially reasonable efforts and
          therefore confirm that the personal data in our possession actually
          relate to you. In such cases, we may request that you provide
          additional information which is reasonably necessary to authenticate
          you and your request. Making a consumer request does not require you
          to create an account with us. However, we may require you to use your
          existing account. We will use any personal data collected from you in
          connection with your request solely for the purposes of
          authentication, without further disclosing the personal data,
          retaining it longer than necessary for purposes of authentication, or
          using it for unrelated purposes. If you are an adult, you can make a
          request on behalf of a child under your parental authority. How and
          when we are expected to handle your request We will respond to your
          request without undue delay, but in all cases and at the latest within
          45 days of its receipt. Should we need more time, we will explain to
          you the reasons why, and how much more time we need. In this regard,
          please note that we may take up to 90 days to fulfill your request.
          Should we deny your request, we will explain to you the reasons behind
          our denial without undue delay, but in all cases and at the latest
          within 45 days of receipt of the request. It is your right to appeal
          such decision by submitting a request to us via the details provided
          in this document. Within 45 days of receipt of the appeal, we will
          inform you in writing of any action taken or not taken in response to
          the appeal, including a written explanation of the reasons for the
          decisions. If the appeal is denied you may contact the Attorney
          General to submit a complaint. We do not charge a fee to respond to
          your request, for up to two requests per year. Further information for
          Connecticut consumers This section of the document integrates with and
          supplements the information contained in the rest of the privacy
          policy and is provided by the controller running this Application and,
          if the case may be, its parent, subsidiaries and affiliates (for the
          purposes of this section referred to collectively as “we”, “us”,
          “our”). This section applies o all Users (Users are referred to below,
          simply as “you”, “your”, “yours”), who are consumers residing in the
          State of Connecticut, according to “An Act Concerning Personal Data
          Privacy and Online Monitoring (also known as The Connecticut Data
          Privacy Act or the CTDPA), and, for such consumers, it supersedes any
          other possibly divergent or conflicting information contained in the
          privacy policy. This part of the document uses the term “personal
          data” as defined in the CTDPA. Categories of personal data processed
          In this section, we summarize the categories of personal data that
          weve processed and the purposes thereof. You can read about these
          activities in detail in the section titled “Detailed information on
          the processing of Persona Data” within this document. Categories of
          personal data we collect We have collected the following categories of
          personal data: We do not collect sensitive data. We will not collect
          additional categories of personal data without notifying you. Why we
          process your personal data To find out why we process your personal
          data, you can read the sections titled “Detailed information on the
          processing of Personal Data” and “The purposes of processing” within
          this document. We won’t process your information for unexpected
          purposes, or for purposes incompatible with the purposes originally
          disclosed, without your consent. You can freely give, deny, or
          withdraw such consent at any time using the contact details provided
          in this document. How we use the data we collect: sharing of your
          personal data with third parties We do not share nor disclose your
          personal data with third parties. For our purposes, the word third
          party means a person, public authority, agency, or body other than a
          consumer, controller, processor, or affiliate of the processor or the
          controller as defined by the CTDPA. Sale of your personal data We do
          not sell your personal data. In case we should decide to, we will
          inform you beforehand and will grant your right to opt out of such
          sale. For our purposes, the word sale, sell, or sold means the
          exchange of personal data for monetary or other valuable consideration
          by a controller to a third party as defined by the CTDPA. Please note
          that according to the CTDPA, the disclosure of personal data to a
          processor that processes personal data on behalf of a controller does
          not constitute a sale. In addition, other specific exceptions set
          forth in the CTDPA may apply, such as, but not limited to, the
          disclosure of personal data to a third party for the provision of a
          product or service requested by you. Processing of your personal data
          for targeted advertising We do not process your personal data for
          targeted advertising. If we decide to do so, we will inform you
          beforehand and will grant your right to opt out of the processing of
          your personal data for targeted advertising. For our purposes, the
          word targeted advertising means displaying to a consumer an
          advertisement that is selected based on personal data obtained or
          inferred over time from the consumers activities across non affiliated
          websites, applications, or online services to predict consumer
          preferences or interests as defined by CTDPA. Please note that
          according to the CTDPA, targeted advertising does not include:
          “advertisements based on activities within a controllers own web sites
          or online applications; advertisements based on the context of a
          consumers current search query, visit to an internet web site or
          online application; advertisements directed to a consumer in response
          to the consumers request for information or feedback; or processing
          personal data solely to measure or report advertising frequency,
          performance or reach”. Your privacy rights under the Connecticut Data
          Privacy Act and how to exercise them You may exercise certain rights
          regarding your data processed by us. In particular, you have the right
          to do the following: access personal data. You have the right to
          request that we confirm whether or not we are processing your personal
          data. You also have the right to access such personal data. correct
          inaccurate personal data. You have the right to request that we
          correct any inaccurate personal data we maintain about you, taking
          into account the nature of the personal data and the purposes of the
          processing of the personal data. request the deletion of your personal
          data. You have the right to request that we delete any of your
          personal data. obtain a copy of your personal data. We will provide
          your personal data in a portable and usable format that allows you to
          transfer data easily to another entity – provided that this is
          technically feasible. opt out of the processing of your personal data
          for the purposes of targeted advertising, the sale of personal data,
          or profiling in furtherance of decisions that produce legal or
          similarly significant effects concerning you. In any case, we will not
          increase the cost of, or decrease the availability of, a product or
          service, based solely on the exercise of any of your rights and
          unrelated to the feasibility or the value of a service. However, to
          the extent permitted by the law, we may offer a different price, rate,
          level, quality, or selection of goods or services to you, including
          offering goods or services for no fee, if our offer is related to your
          voluntary participation in a bona fide loyalty, rewards, premium
          features, discounts, or club card program. How to exercise your rights
          To exercise the rights described above, you need to submit your
          request to us by contacting us via the contact details provided in
          this document. For us to respond to your request, we need to know who
          you are and which right you wish to exercise. We will not respond to
          any request if we are unable to verify your identity using
          commercially reasonable efforts and therefore confirm that the
          personal data in our possession actually relate to you. In such cases,
          we may request that you provide additional information which is
          reasonably necessary to authenticate you and your request. Making a
          consumer request does not require you to create an account with us.
          However, we may require you to use your existing account. We will use
          any personal data collected from you in connection with your request
          solely for the purposes of authentication, without further disclosing
          the personal data, retaining it longer than necessary for purposes of
          authentication, or using it for unrelated purposes. If you are an
          adult, you can make a request on behalf of a child under your parental
          authority. How and when we are expected to handle your request We will
          respond to your request without undue delay, but in all cases and at
          the latest within 45 days of its receipt. Should we need more time, we
          will explain to you the reasons why, and how much more time we need.
          In this regard, please note that we may take up to 90 days to fulfill
          your request. Should we deny your request, we will explain to you the
          reasons behind our denial without undue delay, but in all cases and at
          the latest within 45 days of receipt of the request. It is your right
          to appeal such decision by submitting a request to us via the details
          provided in this document. Within 45 days of receipt of the appeal, we
          will inform you in writing of any action taken or not taken in
          response to the appeal, including a written explanation of the reasons
          for the decisions. If the appeal is denied, you may contact the
          Attorney General to submit a complaint. We do not charge a fee to
          respond to your request, for up to one request per year. Further
          information for Utah consumers This section of the document integrates
          with and supplements the information contained in the rest of the
          privacy policy and is provided by the controller running this
          Application and, if the case may be, its parent, subsidiaries and
          affiliates (for the purposes of this section referred to collectively
          as “we”, “us”, “our”). This section applies to all Users (Users are
          referred to below, simply as “you”, “your”, “yours”), who are
          consumers residing in the State of Utah, according to the “Consumer
          Privacy Act (the UCPA), and, for such consumers, it supersedes any
          other possibly divergent or conflicting information contained in the
          privacy policy. This part of the document uses the term “personal
          data” as defined in the UCPA. Categories of personal data processed In
          this section, we summarize the categories of personal data that weve
          processed and the purposes thereof. You can read about these
          activities in detail in the section titled “Detailed information on
          the processing of Persona Data” within this document. Categories of
          personal data we collect We have collected the following categories of
          personal data: We do not collect sensitive data. We will not collect
          additional categories of personal data without notifying you. Why we
          process your personal data To find out why we process your personal
          data, you can read the sections titled “Detailed information on the
          processing of Personal Data” and “The purposes of processing” within
          this document. How we use the data we collect: sharing of your
          personal data with third parties We do not share nor disclose your
          personal data with third parties. For our purposes, the word third
          party means a person other than: the consumer, controller, or
          processor; or an affiliate or contractor of the controller or the
          processor as defined by the UCPA. Sale of your personal data We do not
          sell your personal data. In case we should decide to, we will inform
          you beforehand and will grant your right to opt out of such sale..
        </p>
        <Link
          target="blank"
          className="underline font-bold text-red-600 mt-6"
          href="https://www.iubenda.com/private/privacy-policy/2682619/legal?preview=true&ifr=true&height=533&newmarkup=no&an=no"
        >
          see all privacy policy
        </Link>
      </div>
    </article>
  );
}
