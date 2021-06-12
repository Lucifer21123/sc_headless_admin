import {
  MenuContainer,
  ModalDialog,
  ModalHeader,
  HeadModalInfo,
  HeadModalAvatar,
  HeadModalInfoDescription,
  ModalContent,
  ModalBody,
  ModalContainer,
  SectionContent,
  ThemeBackground,
  ThemeSelect,
  ModalFooter,
  FooterCenter,
} from "./index.style";

//!import images

import blueTheme from "assets/images/layout/header/miniatures/blue.png";
import grainyTheme from "assets/images/layout/header/miniatures/grainy.png";
import mazeTheme from "assets/images/layout/header/miniatures/maze.png";
import pointsTheme from "assets/images/layout/header/miniatures/points.png";
import warmTheme from "assets/images/layout/header/miniatures/warm.png";

//! import icons
import { IoClose } from "react-icons/io5";

import { AiOutlineSetting } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";

import Select from "components/Select/index";
const selectSetting = {
  fontSize: "14px",
  fontWeight: "normal",
  color: "#212529",
  headerColor: "#212529",
  backgroundColor: "#f8f9fb",
  borderRadius: "8px",
  boxShadow: "1px 1px 4px 1px rgb(11 2 18 / 8%)",
  arrowTop: "50px",
  arrowRight: "-10px",
  itemFontSize: "16px",
  itemFontColor: "#212529",
  itemFontWeight: "normal",
  hoverBackgroundColor: "#f8f9fb",
  hoverColor: "#335491",
  borderColor: "#0b0212",
};

//! function Login Like
const onSelect1 = (item) => {};
const listLogin = [
  {
    id: "Terry Smith",
    label: "Terry Smith",
  },
  {
    id: "Terry Will Green",
    label: "Terry Will Green",
  },
];

//! function linked stores
const onSelect2 = (item) => {};
const linkedStores = [
  {
    id: "Select a store to manage",
    label: "Select a store to manage",
  },
  {
    id: "Select a store to manage",
    label: "Select a store to manage",
  },
  {
    id: "Select a store to manage",
    label: "Select a store to manage",
  },
];

const SidebarMenu = ({ open, onClose }) => {
  return (
    <MenuContainer open={open}>
      <ModalDialog>
        <ModalContent>
          <ModalHeader>
            <HeadModalInfo>
              <HeadModalAvatar>
                <span>AD</span>
              </HeadModalAvatar>
              <HeadModalInfoDescription>
                <h2>G’DAY ANN DOE</h2>
                <p>Your ID: 3491_5650</p>
              </HeadModalInfoDescription>
            </HeadModalInfo>
            <button onClick={onClose}>
              <IoClose size={20} color={"#335491"}></IoClose>
            </button>
          </ModalHeader>
          <ModalBody>
            <ModalContainer>
              <SectionContent>
                <span>MY PROFILE</span>
                <div className="other-links">
                  <ul>
                    <li>
                      <a href="#">
                        <p>View profile</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>Edit profile</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>Change password</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </SectionContent>
              <SectionContent>
                <span>MY CONNECTIONS</span>
                <div className="other-links">
                  <ul>
                    <li>
                      <a href="#">
                        <p>Family</p>
                        <p className="other-links-int">3</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>Besties</p>
                        <p className="other-links-int">3</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>Friends</p>
                        <p className="other-links-int">3</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>Followers</p>
                        <p className="other-links-int">70</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>Connections</p>
                        <p className="other-links-int">70</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </SectionContent>
              <SectionContent>
                <span>Login like</span>
                <div className="other-links">
                  <ul>
                    <li>
                      <Select
                        settings={selectSetting}
                        click={onSelect1}
                        label="Terry Smith"
                        list={listLogin}
                      ></Select>
                    </li>
                  </ul>
                </div>
              </SectionContent>
              <SectionContent>
                <span>My linked stores</span>
                <div className="other-links">
                  <ul>
                    <li>
                      <Select
                        settings={selectSetting}
                        click={onSelect2}
                        label="Select a store to manage"
                        list={linkedStores}
                      ></Select>
                    </li>
                  </ul>
                </div>
              </SectionContent>
              <SectionContent>
                <span>Select background</span>
                <ThemeBackground>
                  <ul>
                    <li>
                      <ThemeSelect>
                        <div className="theme-box-shadow">
                          <img src={mazeTheme} />
                        </div>
                        <span>maze</span>
                      </ThemeSelect>
                    </li>
                    <li>
                      <ThemeSelect>
                        <div className="theme-box-shadow">
                          <img src={pointsTheme} />
                        </div>
                        <span>points</span>
                      </ThemeSelect>
                    </li>
                    <li>
                      <ThemeSelect>
                        <div className="theme-box-shadow">
                          <img src={grainyTheme} />
                        </div>
                        <span>grainy</span>
                      </ThemeSelect>
                    </li>
                    <li>
                      <ThemeSelect>
                        <div className="theme-box-shadow">
                          <img src={blueTheme} />
                        </div>
                        <span>blue</span>
                      </ThemeSelect>
                    </li>
                    <li>
                      <ThemeSelect>
                        <div className="theme-box-shadow">
                          <img src={warmTheme} />
                        </div>
                        <span>warm</span>
                      </ThemeSelect>
                    </li>
                  </ul>
                </ThemeBackground>
              </SectionContent>
            </ModalContainer>
          </ModalBody>
          <ModalFooter>
            <FooterCenter>
              <div className="icon-button">
                <AiOutlineSetting size={25} color="#335491"></AiOutlineSetting>
                <span>settings</span>
              </div>
              <div className="icon-button">
                <IoLogOutOutline size={25} color="#335491"></IoLogOutOutline>
                <span>log out</span>
              </div>
            </FooterCenter>
          </ModalFooter>
        </ModalContent>
      </ModalDialog>
    </MenuContainer>
  );
};
export default SidebarMenu;
