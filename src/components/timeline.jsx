import React,{Fragment} from 'react'


export default function timeline() {
  return (
    <Fragment>
         <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <h1>NIC Inc.</h1>
                      <div className="timeline-label">
                        <h2>Full Stack Software Engineer - Enterprise Licenses & Permits Team<span> 08/18-04/19</span></h2>
                        <p> 
                            Developed a full stack enterprise Cloud solution on AWS using React.js that allows users to apply and receive federal/state licenses/permits via the Web.  All licenses and permits are created and stored on the back-end, using Java and PostgreSQL.
                            Working in an Agile/Scrum environment. 
                            Designed and refactored the code structure package to allow flexibility for future enhancements.
                            Integrated ELP with external APIs including Illinois Health Family Services, incorporating their required checklist for receiving licenses and permits.</p>
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer - Transaction Processing Engine Team<span> 01/16-09/18</span></h2>
                        <p> 
                            Utilized Java, Spring Framework, SOAP, and JDBC to develop enhancements for TPE, an enterprise payment system.
                            Integrated TPE with multiple card processing systems including Vantiv, First Data, and Worldpay.
                            Designed, created, and maintained services to process different types of payments including credit cards, PIN debit, EMV, and ACH (checks) while maintaining PCI compliance.</p>
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer – Recreation 1-Stop Team <span>01/16-08/18</span></h2>
                        <p>   
                          Rebuilt TPE using Java to implement a new flow, which elevated NIC from a state-only payment processor to processing Federal Government payments.
                          Implemented JPA, ORM/Eclipse-Link, and RESTful Web services to replace legacy systems.
                          Created RESTful APIs and documentation with Swagger to integrate internal and external services with TPE.
                          Developed stand-alone Spring Boot applications to aid integration testing of legacy functionality with the new TPE flow.
                          Increased unit test coverage from 7% to over 40%.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <h1>First Call Alcohol/Drug Prevention & Recovery</h1>
                      <div className="timeline-label">
                        <h2> Software Engineer Intern <span>05/15-08/15</span></h2>
                        <p>
                          Developed enhancements for Community Care Link (CCL), an enterprise application for behavior health records, assessments, and client billing.
                          Utilized ASP.NET MVC, SQL/T-SQL, and Microsoft SQL Server Reporting Services (SSRS) to create behavioral health records, assessments, and client billing report.
                          Refactored code to improve performance and fix bugs.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <h1>University of Central Missouri</h1>
                      <div className="timeline-label">
                        <h2> Undergraduate Student<span> 2013-2015</span></h2>
                        <p>Bachelors of Science in Business Administration 
                            Major: Computer Information Systems  (Software Development)</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Fragment>
  )
}