import React from "react";
import UserProfileMenu from "../../components/Modals/UserProfileMenu";
import {remindersAlerts} from "../../data/alerts/remindersAlerts";
import {requestsAlerts} from "../../data/alerts/requestsAlerts";
import AlertsBox from "./AlertsBox";
import AlertsRequest from "./AlertsRequest"

interface AdminAlertProps {

}

const AdminAlertContent: React.FC<AdminAlertProps> = ({}) => {
  return (
    <div>
      <div
        className="section-blur theme-background-one"
        data-class="blue"
        id="background"
      >
        <div className="container container--admin">
          <div className="alerts">
            <div className="main-content position-relative d-flex align-items-start justify-content-between">
              {/* <!-- main --> */}
              <main className="main d-flex align-items-start flex-column flex-lg-row">
                {(remindersAlerts.length > 0) ? <section className="section-content">
                  <span className="section-content__title position-relative d-flex align-items-center">
                    Reminders
                  </span>

                  <div className="reminders position-relative">
                    <ul className="reminders__list list-unstyled mb-0">
                      {remindersAlerts.map((item: any, index: number) => (
                        <AlertsBox
                          key={index}
                          title={item.title}
                          info={item.info}
                          bgImg={item.bgImg}
                          contentVal={item.contentVal}
                          sku={item.sku}
                          qty={item.qty}
                          price={item.price}
                          commentsNum={item.commentsNum}
                          editLink={item.editLink}
                        />
                      ))}
                    </ul>
                  </div>
                </section> :
                <section className="section-content">
                  <span className="section-content__title position-relative d-flex align-items-center">
                    Reminders
                    <i className="icon icon-help ml-1"></i>
                  </span>

                  <div className="reminders reminders--empty position-relative">
                    <div className="alerts-empty d-flex align-items-center">
                      <figure className="alerts-empty__img">
                        <img
                          src="../../images/alerts/new_message-bro.svg"
                          alt="alerts-empty"
                        />
                      </figure>
                      <p className="alerts-empty__text text-blue2">
                        Nothing important, yet <br />
                        We will notify you
                      </p>
                    </div>
                  </div>
                </section>
                }
              </main>
              {/* <!-- /main --> */}
              <aside className="aside-right">
                {(requestsAlerts.length > 0) ? <section className="section-content">
                  <span className="section-content__title position-relative d-flex align-items-center">
                    Requests & News
                  </span>
                  <div className="notification">
                    <div
                      className="notification__wrap position-relative"
                      data-scroll="perfect-scrollbar"
                    >
                      {requestsAlerts.map((item: any, index: number) => (
                        <AlertsRequest
                          key={index}
                          info={item.info}
                          avatar={item.avatar}
                          name={item.name}
                          groupName={item.name}
                          headerline={item.headerline}
                          content={item.content}
                          gridGallary={item.gridGallary}
                          gallaryBg={item.gallaryBg}
                          subcontent={item.subcontent}
                          giftFor={item.giftFor}
                          href1={item.href1}
                          href2={item.href2}
                        />
                      ))}
                    </div>
                  </div>
                </section> :
                <section className="section-content">
                  <span className="section-content__title position-relative d-flex align-items-center">
                    Requests & News
                    <i className="icon icon-help ml-1"></i>
                  </span>
                  <div className="notification notification--empty">
                    <div className="alerts-empty d-flex align-items-center">
                      <figure className="alerts-empty__img">
                        <img
                          src="../../images/alerts/mail_sent-bro.svg"
                          alt="alerts-empty"
                        />
                      </figure>
                      <p className="alerts-empty__text text-blue2">
                        All new info will be visible here. <br />
                        We don’t let you miss them
                      </p>
                    </div>
                  </div>
                </section>
                }
              </aside>
            </div>
          </div>
        </div>
      </div>
      <UserProfileMenu />
    </div>
  );
};

export default AdminAlertContent;
