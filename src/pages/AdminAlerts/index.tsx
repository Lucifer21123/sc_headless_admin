import React from "react";
import UserProfileMenu from "../../components/Modals/UserProfileMenu";
import {remindersAlerts} from "../../data/alerts/remindersAlerts";
import {requestsAlerts} from "../../data/alerts/requestsAlerts";
import AlertsBox from "./AlertsBox";
import AlertsRequest from "./AlertsRequest"

interface AdminAlertProps {

}

// type AlertsBoxType = {
//   info: string,
//   bgImg: string,
//   title: string,
//   contentVal: number,
//   sku: string,
//   qty: string,
//   price: number,
//   commentsNum: string,
//   editLink: string,
// }

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
                <section className="section-content">
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
                </section>
              </main>
              {/* <!-- /main --> */}
              <aside className="aside-right">
                <section className="section-content">
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
                </section>
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
