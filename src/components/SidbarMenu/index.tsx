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
} from "./index.style";

import { IoClose } from "react-icons/io5";

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
                      <a href="#">
                        <p>View profile</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </SectionContent>
            </ModalContainer>
          </ModalBody>
        </ModalContent>
      </ModalDialog>
    </MenuContainer>
  );
};
export default SidebarMenu;
