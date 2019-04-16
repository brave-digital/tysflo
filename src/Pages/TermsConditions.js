import React, { Component } from 'react'
import { Helmet } from "react-helmet";

import { RunGAPageView } from '../Components/GAFunctions'
import Page from "../Components/Page";
import { Grid, Row, Col } from 'react-flexbox-grid'


export default class TermsConditions extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Website Terms and Conditions of Use</title>
          <meta
            name="description"
            content="http://demo5.braveclients.com/terms-and-conditions
            Title:
            Tysflo | Website Terms and Conditions of Use
            
            Description:
            These Terms and Conditions (“The Terms and Conditions”) Regulate Your (“The User”) Use of The Tysflo (Pty) Ltd.(“Tysflo”) Website."
          />
        </Helmet>
        <div className="terms page-bg">
          <Grid fluid>
            <Row>
              <Col xs={11} xsOffset={1} sm={11} md={11}>
                <h3 className="text-white top-margin ">
                  WEBSITE TERMS AND CONDITIONS OF USE
                </h3>
              </Col>
            </Row>
            <Row>
              <Col xs={11} xsOffset={1} sm={11} md={10}>
                <h4 className="text-blue caption ">
                  Website Terms and Conditions of Use
                </h4>
                <p>
                  These Terms and Conditions (“the Terms and Conditions”)
                  regulate your (“the User”) use of the Tysflo (Pty)
                  Ltd.(“Tysflo”) website located at the domain name
                  https://www.tysflo.com (“the Website”). By accessing and
                  using the Website, the User agrees to be bound by the
                  Terms and Conditions set out in this legal notice. If the
                  User does not wish to be bound by these Terms and
                  Conditions, the User may not access, display, use,
                  download, and/or otherwise copy or distribute Content
                  obtained at the Website.
                </p>
                <h4 className="text-blue caption ">
                  Updating of these Terms and Conditions
                </h4>
                <p>
                  Tysflo reserves the right to: change, modify, add or
                  remove from portions or the whole of these Terms and
                  Conditions from time to time. Changes to these Terms and
                  Conditions will be become effective upon such changes
                  being posted to this Website. It is the Users obligation
                  to periodically check these Terms and Conditions at the
                  Website for changes or updates. The User’s continued use
                  of this Website following the posting of changes or
                  updates will be considered notice of the User’s acceptance
                  to abide by and be bound by these Terms and Conditions,
                  including such changes or update.
                </p>
                <h4 className="text-blue caption ">Tysflo details</h4>
                <p>
                  In accordance with the disclosure requirements of the
                  Electronic Communications and Transactions Act (“ECTA”),
                  Act no 25 of 2005, Tysflo makes the following information
                  available to consumers:
                </p>
                <p>
                  Tysflo is a public limited company duly registered and
                  existing under the laws of South Africa registration
                  number 2016/134468/07, Block B Oxford Office Park, 5 8th
                  Street, Houghton, Johannesburg, 2193, South Africa
                </p>
                <ol type="a">
                  <li>
                    The directors of Tysflo are:
                    <br />
                    Directors: A Shenton,
                    <br />
                    D Torr, J Hamalainen, P Greyling*, R Bunce*
                    <br />
                    (* Non-Executive Director)
                  </li>
                  <li>Tysflo’s email address is info@tysflo.com</li>
                  <li>
                    Terms and Conditions of download The information,
                    services and products offered through this website by
                    Tysflo are strictly on an “as is” basis.{" "}
                  </li>
                  <li>
                    Complaints and Disputes Any complaints relating to the
                    specific service or products may be directed generally
                    to info@tysflo.com.
                  </li>
                </ol>

                <h4 className="text-blue caption ">
                  Copyright and Intellectual Property Rights
                </h4>
                <p>
                  Tysflo provides certain information on the Website.
                  Content currently or anticipated to be displayed at this
                  Website is provided by Tysflo, its affiliates and/or
                  subsidiaries, or any other third party owners of such
                  content, and includes but is not limited to Literary
                  Works, Musical Works, Artistic Works, Sound Recordings,
                  Cinematograph Films, Sound and Television Broadcasts,
                  Program-Carrying Signals, Published Editions and Computer
                  Programs (“the Content”). All such proprietary works, and
                  the compilation of the proprietary works, belong to
                  Tysflo, its affiliates or subsidiaries, or any third party
                  owners of such rights (“the Owners”) and the content
                  protected by South African and international copyright
                  laws. Tysflo reserves the right to make any changes to the
                  Website, the Content, or to products and/or services
                  offered through the Website at any time and without
                  notice. Except as specified in these Terms and Conditions,
                  the User is not granted a license or any other right
                  including without limitation Copyright. Trademark, Patent
                  or other Intellectual Property Rights in or to the
                  Content.
                </p>

                <h4 className="text-blue caption ">
                  Limitation of Liability
                </h4>
                <p>
                  Subject to ss 43(5) and 43(6) of ECTA, if applicable, and
                  to the extent permitted by law, the Website and all
                  Content on the Website, including any current or future
                  offer of products or services, are provided on an “as is”
                  basis, and may include inaccuracies or typographical
                  errors and Tysflo, Owners, suppliers, employees,
                  directors, partners, affiliates and agents shall not be
                  liable for any damage, or loss or liability of any nature
                  incurred by whoever as a result of any action or omission.
                  The Owners make no warranty or representation as to the
                  availability, accuracy or completeness of the Content, or
                  any third-party content accessible via an Internet link.
                  Neither Tysflo nor any holding company, affiliate or
                  subsidiary of Tysflo or Owners, shall be held responsible
                  for any direct or indirect special, consequential or other
                  damage of any kind whatsoever suffered or incurred,
                  related to the use of, or the inability to access or use
                  the Content or the Website or any functionality thereof,
                  or of any linked website, even if Tysflo is expressly
                  advised thereof.
                </p>

                <h4 className="text-blue caption ">
                  Privacy, access to and use of information
                </h4>
                <p>
                  Tysflo receives various types of information (“the
                  Information”) from Users who access the Website, including
                  personal information as detailed in the Promotion of
                  Access to Information Act (“PAIA”) Act 2 of 2000, and as
                  detailed in s 1 of ECTA (hereinafter referred to “Personal
                  Information”). Tysflo voluntarily subscribes to s 51 of
                  ECTA and endeavours to treat Personal Information received
                  by Tysflo accordingly. Whenever User is of the opinion
                  that Tysflo fails to comply with s 51 of ECTA, User shall
                  contact Tysflo by sending an email to info@tysflo.com.
                  Tysflo will review User’s representations made by email
                  and, if within Tysflo’s sole and absolute discretion
                  advisable, take corrective action and in any event within
                  seven days respond to User informing about corrective
                  actions taken, if any. Despite such undertaking, it is
                  possible for Internet-based communications to be
                  intercepted. Without the use of encryption, the Internet
                  is not a secure medium and privacy cannot be ensured.
                  Internet e-mail is vulnerable to interception and forging.
                  The Owners will not be responsible for any damages you or
                  any third party may suffer as a result of the transmission
                  of confidential or disclosed information that you may make
                  to the Owners and/or Tysflo through the Internet, or that
                  you expressly or impliedly authorize the Owners to make,
                  or for any errors or any changes made to any transmitted
                  information. To ensure acquaintance with and awareness of
                  the privacy measures and policies of Tysflo, the User is
                  urged to take care and read and understand the underlying
                  privacy clauses incorporated in these Terms and Conditions
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Casual Surfing
                </h4>
                <p>
                  The User may visit the Website without providing any
                  personal information. The User accordingly hereby grants
                  express written permission for the Website servers in such
                  instances collecting the IP address of the User computer,
                  but not email address or any other distinguishing
                  information. This information is aggregated to measure the
                  number of visits, average time spent at the Website and
                  pages viewed. Tysflo uses this information to determine
                  use of the Website, and to improve Content thereon. Tysflo
                  assumes no obligation to protect this information, and may
                  copy, distribute and otherwise use such information
                  without limitation.
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Unsolicited Information
                </h4>
                <p>
                  If the User posts unsolicited content or other information
                  (“the Information”) to the Website, and unless otherwise
                  indicated, then the User grants to the Owners a
                  non-exclusive, royalty-free, perpetual, irrevocable, and
                  fully sub-licensable right to use, reproduce, modify,
                  adapt, publish, translate, create derivative works from,
                  distribute and display such Information throughout the
                  world in any media. The User grants the Owners the right
                  to use the name of that the User submits in connection
                  with such Information, if they choose. The User warrants
                  that the User owns or otherwise controls all of the rights
                  to the Information that the User posts; that the
                  Information is accurate; that by the supply of the
                  Information to Tysflo, the User does not violate this
                  Policy and does not infringe the rights of any person or
                  entity; and that the User indemnifies the Owners for all
                  claims resulting from the receipt by Tysflo of the
                  Information the User supplies to it. Tysflo reserves the
                  right but not the obligation to monitor and edit or remove
                  any Information, where posted to public pages. Tysflo
                  takes no responsibility, and assumes no liability for any
                  Information posted by the User or any third part.
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Solicited Information the User gives to Provider
                </h4>
                <p>
                  Tysflo requires certain Personal Information necessary to
                  process transactions if the User requires any of specific
                  services or products offered by Tysflo. Tysflo received
                  and stores all Information, including Personal Information
                  which the User enters on the product or service specific
                  Websites or gives to Tysflo, in any other way. The User
                  may chose not to provide certain Personal Information, but
                  that may limit the specific services or products that the
                  User may make use of. Tysflo provides its services and
                  products in conjunction with its subsidiaries. In this
                  regard and unless specifically restricted by the User from
                  the license below, the User hereby and when entering into
                  the specific transactions in question expressly grants in
                  writing to the Tysflo a non-exclusive, royalty free,
                  perpetual, irrevocable, and fully sub-licensable right to
                  use, reproduce, modify, adapt, publish, translate, crate
                  derivative works from, distribute, and display such
                  Information throughout the world in any media for any
                  purpose whatsoever. The User’s Information that is
                  required by subsidiaries to give effect to products or
                  services that the User wishes to make use of is shared
                  with those entities.
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Promotional Information
                </h4>
                <p>
                  Tysflo aspires to provide firs-class service to its
                  customers, which necessitates Tysflo providing information
                  to the User regarding new services or special offers. In
                  each instance, the User is provided an opportunity to
                  opt-out of such information circulars. For more
                  information, please call the Tysflo Help Desk or send an
                  email to info@tysflo.com
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Business Transfers
                </h4>
                <p>
                  Tysflo may enter into business arrangements whereby its
                  customer base is one of the more valued assets. In such an
                  event, customer Information will be one of the
                  transferable assets.
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Lawful Purposes
                </h4>
                <p>
                  When Tysflo is served with due legal process requiring
                  delivery of Personal Information, it has the legal duty to
                  abide by the demand, and will do so. Tysflo may also
                  impart Personal Information if permitted or required to do
                  so by law.
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Surveys and Statistical Profiles
                </h4>
                <p>
                  Tysflo understands that efficiency and customer care
                  translates to good service. Tysflo may periodically
                  conduct online customer care surveys to facilitate the
                  updating of service standards. When it conducts a survey,
                  Tysflo will inform the User how the information gathered
                  will be used, and will provide the User with the
                  opportunity to opt-out from such surveys. Notwithstanding
                  the foregoing, Tysflo may chose to use Personal
                  Information to compile profiles for statistical purposes
                  and may chose to trade with such profiles and statistical
                  data, as long as the profiles or statistical data cannot
                  be linked to any specific data subject, including the
                  User, by a third party.
                </p>

                <h4 className="text-blue caption ">Privacy: Storage</h4>
                <p>
                  Personal Information will be stored for as long as it is
                  used and for a period of one year thereafter, together
                  with a record of the Personal Information and the specific
                  purpose it was collected for. Personal Information will be
                  destroyed once it has become obsolete.
                </p>

                <h4 className="text-blue caption ">
                  Privacy: Interception
                </h4>
                <p>
                  Subject to the Regulation of Interception of
                  Communications Act (“RICA”) Act no 70 of 2002, the User
                  agrees that Tysflo may intercept, block, read, delete,
                  disclose and use all communications sent or otherwise
                  communicated to Tysflo, its employees, directors and
                  agents. The User agrees that his or her consent satisfies
                  the requirements of ECTA and RICA for consent in “writing”
                  as defined.
                </p>

                <h4 className="text-blue caption ">Choice of Law:</h4>
                <p>
                  This Website is controlled, operated and administered by
                  Tysflo from its offices within the Republic of South
                  Africa. Tysflo makes no representation that the Content is
                  appropriate or available for use in locations or countries
                  other than the Republic of South Africa. Access to the
                  Website from territories or countries where the Content is
                  illegal is prohibited. The User may not use this Website
                  in violation of South African export laws and regulations.
                  If the User accesses this Website from locations outside
                  of South Africa, that User is responsible for compliance
                  with all local laws. These Terms and Conditions shall be
                  governed by the laws of the Republic of South Africa, and
                  the user consents to the jurisdiction of the South Gauteng
                  High Court, Johannesburg in the event of any dispute. If
                  any provision of these Terms and Conditions are found by a
                  court of competent jurisdiction to be invalid or
                  unenforceable, that provision shall be enforced to the
                  maximum extent permissible so as to give effect to the
                  intent of these Terms and Conditions, and the remainder of
                  these Terms and Conditions shall continue in full force
                  and effect. These Terms and Conditions constitutes the
                  entire agreement between Tysflo and the User with regard
                  to the use of the Content and this Website.
                </p>

                <h4 className="text-blue caption ">Contact details</h4>
                <p>
                  In the event that you need to contact Tysflo for purposes
                  related to these Terms and Conditions, please use the
                  following: <br />
                  Email: info@tysflo.com <br />
                  © Tysflo Pty Ltd. 2019 <br />
                  This Website was most recently updated in April 2019
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
      </Page>
    );
  }
}
