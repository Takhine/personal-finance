import React from "react";
import { Row, Col, Button } from "antd";
import { NavLink } from "react-router-dom";

export default function ServicesSection() {
  return (
    <div className="services-section">
      <div className="service">
        <h3 className="service-name" name="credit-card">Credit Cards</h3>
        <p className="main-service-description">
          When it comes to the fast paced lifestyle of UAE, credit cards always
          deserve a special mention. Most of the reputed financial organizations
          come up with suitable credit cards to maximize the possibilities for
          the users. Credit cards are the most sought after banking products
          that everybody relies on today.
        </p>
        <Row gutter={12}>
          <Col xs={24} md={12}>
            <h4 className="section-name">
              Benefits of Credit Cards in Dubai, UAE
            </h4>
            <p className="service-description">
              Be it Dubai or any other place in the world, credit cards always
              serve people in a beneficial way.
            </p>
            <ul className="service-list">
              <li>
                Credit cards let people enjoy shopping without carrying a lot of
                money with them. without worrying about limited cash, people can
                enjoy shopping without any hassle using a credit card. Credit
                card limits the expenditure of people because of fixed credit
                limit only.
              </li>
              <li>
                The duration of credit card bill payment is flexible, hence,
                people do not feel the hurry about repayment.
              </li>
              <li>
                Even if a person’s bank account carries zero balance, then also
                he can buy things in both online and offline shopping format.
                The banks offer short term mortgages with a duration of 50 days
                without charging any interest.
              </li>
              <li>
                Credit cards often offer rewards and points that make the
                customers feel privileged and above all, happy
              </li>
              <li>
                Credit cards are handy and they act as saviours in emergency
                situations.
              </li>
              <li>
                Unexpected expenditure due to emergency situations get taken
                care of by credit shield insurance.
              </li>
              <li>
                Cash back options, discounts, special deals and loyalty points
                make the credit cards lucrative baking products for all.
              </li>
            </ul>
          </Col>
          <Col xs={24} md={12}>
            <h4 className="section-name">How Do The Credit Cards Work?</h4>
            <p className="service-description">
              Credit cards can be used extensively while doing online and
              offline purchase from plush showrooms and local supermarkets both.
              banks monitor the purchases in order to track whether the expenses
              are remaining within the credit limit or not. banks send bill to
              their customers at the end of the month with certain instructions
              and period of repayment.
            </p>
            <h4 className="section-name">
              For Eligibility, Fees and Other Information Please Contact Us
              here. Our executive will contact you with personalised details for
              your needs.
            </h4>
            <NavLink exact to="/contact-us" activeClassName="selected">

              <Button className="service-button">Contact us</Button>
            </NavLink>
          </Col>
        </Row>
      </div>
      <div className="service withBackground">
        <h3 className="service-name white" name="personal-loan">Personal Mortgages</h3>
        <p className="main-service-description white">
          Personal mortgage is a type of unsecured mortgage. We help people during their
          period of monetary crisis with quick disbursement of mortgages and easy
          payment options. Rightly planned agreements make it easier for the
          applicants to repay the amount of mortgages based on their credit history.
          The repayments of mortgages get done through EMIs.
        </p>
        <p className="main-service-description white">
          In case of personal mortgages in UAE, the banks do not ask the applicants
          about the purposes of borrowing money. These mortgages can be taken by the
          applicants for various reasons such as education fees, personal
          commitment, medical emergency, education fees and much more.
        </p>
        <p className="main-service-description white">
          Organizations that we’re associated with, grant the mortgages in a super
          fast manner. Hence, the applicants find it easier to meet their needs.
          Comparatively, the EMI amounts of personal mortgages are always lesser
          than the EMI amounts of other types of mortgages. When it comes to
          personal mortgages, the applicants never get charged with any foreclosure
          charges.
        </p>
      </div>
      <div className="service">
        <h3 className="service-name" name="home-loan">Home Mortgage</h3>
        <p className="main-service-description">
          Personal Finance Gulf is here to help you fulfil your dreams with
          worrying about your finances. Everyone dreams of a home of his own. A
          home is not only a fiscal asset but it also has a lot of emotional
          value. Purchasing a house is a brilliant idea for every working
          professional.
        </p>
        <p className="main-service-description">
          With Personal Finance Gulf by your side, you don’t need to worry
          anymore. Just click here and grab your mortgage mortgage today!
        </p>
        <Row gutter={12}>
          <Col xs={24} md={12}>
            <h4 className="section-name">
              Eligibility For A Mortgage Mortgage In UAE
            </h4>
            <ul className="service-list">
              <li>The minimum age of a mortgage applicant is 21 years.</li>
              <li>
                The maximum age of a mortgage applicant is 58 years. If an applicant
                is salaried and he is 60 years of age with a self-employment, it
                can change according to the mortgage provider.
              </li>
              <li>
                An applicant needs to have a stable earning to repay the
                mortgage mortgage as his monthly income alone can help him in
                determining the mortgage amount.
              </li>
              <li>Clean credit record.</li>
            </ul>
          </Col>
          <Col xs={24} md={12}>
            <h4 className="section-name">
              Documents Required For A Mortgage In UAE
            </h4>
            <ul className="service-list">
              <li>
                Documents that confirms the applicant’s identity such as his
                passport or driver’s license.
              </li>
              <li>Proof of residence.</li>

              <li>Age proof</li>

              <li>Bank account statement.</li>
              <li>Latest salary slips</li>
            </ul>
          </Col>
        </Row>
        <h4 className="section-name">New Rules For Mortgage UAE</h4>
        <p className="service-description">
          The new rules of mortgage mortgages have been issued by the UAE Central
          Bank. As per the new rules:
        </p>
        <ul className="service-list">
          <li>
            Non-natives get allowed to take a mortgage of 75% of the total value of
            a chosen property for the first investment of less than AED 5
            million whereas UAE residents will be allowed to get mortgages up to
            80%.
          </li>
          <li>
            For assets worth more than AED 5 million, non-natives and UAE
            residents can take mortgage up to 65% and 70% respectively of the total
            value of the property.
          </li>

          <li>
            All mortgages get restricted to 50% for off-plan properties or
            assets irrespective of their purpose, value or nationality.
          </li>

          <li>
            Mortgage repayment timeline can be extended up to 25 years. Maximum age
            for non-natives and UAE residents as mortgage applicants are 65 and 70
            years respectively.
          </li>
          <li>
            EMI cannot be more than 50% of a borrower’s monthly income. Total
            repayments cannot exceed the yearly income earned in 7 years for a
            non-native and 8 years for a UAE resident.
          </li>
          <li>Since November 2013, the above new rules came into effect.</li>
        </ul>
      </div>
      <div className="service withBackground">

        <h3 className="service-name white" name="auto-loan">Auto Mortgages</h3>
        <h4 className="section-name" style={{ textAlign: 'center' }}>
          Looking For Your Fantasy Car ? A Car For Your Family? Don’t Wait
          Anymore and Buy It Today!
            </h4>
        <p className="main-service-description white">
          Personal Finance Gulf helps you buy your dream car with hassle
          free auto-mortgages. We handhold you throughout the process and
          provide quick disbursement and easy payment options.
            </p>
        <Row gutter={12}>
          <Col xs={24} md={12}>
            <h4 className="section-name">Car Mortgage Features</h4>
            <ul className="service-list white">
              <li>
                Depending on the bank’s rule, car mortgages ranges from 30000AED
                up to AED 900,000.
                  </li>
              <li>
                Maximum car mortgage repayment period can range from 12 months
                to 60 months depending on the comfort level of an applicant.
                  </li>
              <li>
                If an applicant go for a general interest rate, then he can
                end up paying as less as 2.35% per year. The very interest
                rate depends on the banks and it can change from one bank to
                another.
                  </li>
              <li>
                One can opt between general interest rates or lowering
                balance interest rates, which can go a bit higher.
                  </li>
              <li>Car mortgage can be taken to buy both new and used cars.</li>
              <li>
                80% to 100% of the money of the total value of a car can be
                taken as a mortgage.
                  </li>
              <li>
                Car mortgage can be taken by both residents and non-native who
                work in the UAE.
                  </li>
            </ul>
          </Col>
          <Col xs={24} md={12}>
            <h4 className="section-name">Benefits Of Getting Car Mortgages</h4>
            <p className="service-description white">
              Car mortgage is not only a financial tool, it also offers many
              advantages to applicants. Some of these advantages are :
                </p>

            <ul className="service-list white">
              <li>
                Maximum current accounts come with a minimum balance
                regulations which cannot be negated. Many banks waive the
                very clause once an applicant takes car mortgages from them.
                  </li>
              <li>
                Most of the banks offer credit cards that never charge any
                fee for the first year.
                  </li>
              <li>
                Car mortgages can be taken for all kinds of cars such as sedans,
                saloon, 4X4 vehicles and much more.
                  </li>
              <li>
                Some banks even provide car insurance at flexible rates
                along with the mortgages.
                  </li>
              <li>
                SIP or Staggered Investment Plans allows the applicants to
                enjoy affordable instalments which gradually increases the
                tenure of the mortgage.
                  </li>
            </ul>
            <NavLink exact to="/contact-us" activeClassName="selected">

              <Button className="service-button">Contact us</Button>
            </NavLink>
          </Col>
        </Row>
      </div>
    </div>
  );
}
