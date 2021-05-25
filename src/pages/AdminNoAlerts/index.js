import React from "react";
import UserProfileMenu from "../../components/Modals/UserProfileMenu";

const AdminNoAlerts = () => {
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
              <main className="main main--fluid d-flex align-items-start flex-column flex-lg-row">
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
              </main>
              {/* <!-- /main --> */}
            </div>
          </div>
        </div>
      </div>
      <UserProfileMenu />
    </div>
  );
};

export default AdminNoAlerts;
