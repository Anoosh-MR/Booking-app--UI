import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faPlane,
  faCar,
  faMap,
  faTaxi,
  faCalendarDays,
  faPerson,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  HeaderContainer,
  HListItem,
  HTitle,
  HListItems,
  HeaderTitle,
  HeaderDiscription,
  HeaderButton,
  HeaderSearch,
  HeaderSearchItem,
  HeaderIcon,
  HeaderSearchText,
  HeaderSearchButton,
  HeaderSearchInput,
  DatePicker,
  OptionItem,
  OptionText,
  OptionCounterNumber,
  OptionCountBtn,
  OptionCounter,
  Options,
} from ".././styles/HeaderStyled";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, SetDestinatlion] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, SetOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const HandleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <Container>
      <HeaderContainer type={type}>
        <HListItems>
          <HListItem className="active">
            <FontAwesomeIcon icon={faHotel} />
            <HTitle>Stays</HTitle>
          </HListItem>

          <HListItem>
            <FontAwesomeIcon icon={faPlane} />
            <HTitle>Flights</HTitle>
          </HListItem>

          <HListItem>
            <FontAwesomeIcon icon={faCar} />
            <HTitle>Car Rental</HTitle>
          </HListItem>

          <HListItem>
            <FontAwesomeIcon icon={faMap} />
            <HTitle>Attractions</HTitle>
          </HListItem>
          <HListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <HTitle>Airport Taxi</HTitle>
          </HListItem>
        </HListItems>
        {type !== "list" && (
          <>
            <HeaderTitle>Find your next stay</HeaderTitle>
            <HeaderDiscription>
              Search low prices on hotels, homes and much more...
            </HeaderDiscription>
            <HeaderButton>Sign in/Register</HeaderButton>

            <HeaderSearch>
              <HeaderSearchItem>
                <HeaderIcon icon={faBed} />
                <HeaderSearchInput
                  type="text"
                  name="search"
                  placeholder="Where are you going..?"
                  onChange={(event) => SetDestinatlion(event.target.value)}
                />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderIcon icon={faCalendarDays} />
                <HeaderSearchText onClick={(event) => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </HeaderSearchText>
                {openDate && (
                  <DatePicker
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                )}
                ;
              </HeaderSearchItem>

              <HeaderSearchItem>
                <HeaderIcon icon={faPerson} />
                <HeaderSearchText
                  onClick={() => SetOpenOptions(!openOptions)}
                >{`${options.adult} Adult -- ${options.children} Children -- ${options.room} Room  `}</HeaderSearchText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <OptionText>Adult</OptionText>
                      <OptionCounter>
                        <OptionCountBtn
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCountBtn>
                        <OptionCounterNumber>
                          {options.adult}
                        </OptionCounterNumber>
                        <OptionCountBtn
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCountBtn>
                      </OptionCounter>
                    </OptionItem>

                    <OptionItem>
                      <OptionText>Children</OptionText>
                      <OptionCounter>
                        <OptionCountBtn
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCountBtn>
                        <OptionCounterNumber>
                          {options.children}
                        </OptionCounterNumber>
                        <OptionCountBtn
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCountBtn>
                      </OptionCounter>
                    </OptionItem>

                    <OptionItem>
                      <OptionText>Room</OptionText>
                      <OptionCounter>
                        <OptionCountBtn
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </OptionCountBtn>
                        <OptionCounterNumber>
                          {options.room}
                        </OptionCounterNumber>
                        <OptionCountBtn
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </OptionCountBtn>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderSearchButton onClick={HandleSearch}>
                  Search
                </HeaderSearchButton>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </HeaderContainer>
    </Container>
  );
};

export default Header;
