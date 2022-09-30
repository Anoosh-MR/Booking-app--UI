import React, { useState } from "react";
import { format } from "date-fns";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";

import {
  ListContainer,
  ListWraper,
  ListSearch,
  ListSearchTitle,
  ListResult,
  SearchItem,
  SearchInput,
  SearchInputLabel,
  DestinatinSpan,
  IsOptionItem,
  IsOptionInput,
  SearchSpan,
  SearchButton,
} from "../../components/styles/ListStyled";
import {
  OptionItem,
  OptionText,
  OptionCounterNumber,
  OptionCountBtn,
  OptionCounter,
  Options,
} from "../../components/styles/HeaderStyled";
import { type } from "@testing-library/user-event/dist/type";
import SearchResult from "../../components/searchItem/SearchResult";

const List = () => {
  const location = useLocation();
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, SetOptions] = useState(location.state.options);
  const [optionsOpen, SetOptionsOpen] = useState(false);

  const handleOption = (name, operation) => {
    SetOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <ListContainer>
        <ListWraper>
          <ListSearch>
            <ListSearchTitle>Search</ListSearchTitle>
            <SearchItem>
              <SearchInputLabel>Destination</SearchInputLabel>
              <SearchInput type="text" placeholder="Goa" />
            </SearchItem>
            <SearchItem>
              <SearchInputLabel>Check-in Date</SearchInputLabel>
              <DestinatinSpan
                onClick={(event) => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</DestinatinSpan>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </SearchItem>

            <SearchItem>
              <SearchInputLabel>Options</SearchInputLabel>
              <DestinatinSpan
                onClick={() => SetOptionsOpen(!optionsOpen)}
              >{`${options.adult} Adult -- ${options.children} Children -- ${options.room} Room  `}</DestinatinSpan>

              {optionsOpen && (
                <Options type={type}>
                  <OptionItem>
                    <OptionText>Adult</OptionText>
                    <OptionCounter>
                      <OptionCountBtn
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </OptionCountBtn>
                      <OptionCounterNumber>{options.adult}</OptionCounterNumber>
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
                      <OptionCounterNumber>{options.room}</OptionCounterNumber>
                      <OptionCountBtn onClick={() => handleOption("room", "i")}>
                        +
                      </OptionCountBtn>
                    </OptionCounter>
                  </OptionItem>
                </Options>
              )}
              <IsOptionItem>
                <SearchSpan>
                  Min price<small>per night</small>
                </SearchSpan>
                <IsOptionInput type="number" min={1} />
              </IsOptionItem>
              <IsOptionItem>
                <SearchSpan>
                  Max price<small>per night</small>
                </SearchSpan>
                <IsOptionInput type="number" min={1} />
              </IsOptionItem>
            </SearchItem>

            <SearchButton>Search</SearchButton>
          </ListSearch>
          <ListResult>
            <SearchResult />
          </ListResult>
        </ListWraper>
      </ListContainer>
    </div>
  );
};

export default List;
