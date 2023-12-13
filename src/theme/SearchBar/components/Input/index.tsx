import React from "react";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./index.module.scss";

import IconClear from "../../icons/clear.svg";
import IconSearch from "../../icons/search.svg";

interface InputProps {
  query: string;
  setQuery: (query: string) => void;
  searchFormEl: React.RefObject<HTMLFormElement>;
  searchInputEl: React.RefObject<HTMLInputElement>;
  closeSearch: () => void;
}

const Input = ({
  query,
  setQuery,
  searchFormEl,
  searchInputEl,
  closeSearch,
}: InputProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    setQuery("");
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowUp":
      case "ArrowDown":
        e.preventDefault();
    }
  };

  return (
    <div className={styles.input}>
      <form onSubmit={handleSubmit} onReset={handleReset} ref={searchFormEl}>
        <label>
          <IconSearch
            className={`${styles.icon} ${query ? styles.active : ""}`}
          />
          <input
            type="text"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder={translate({
              id: "tds.search.search",
              message: "搜索文档",
            })}
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={searchInputEl}
          />
        </label>
        {query && (
          <button
            className={styles.clearButton}
            type="reset"
            title={translate({
              id: "tds.search.clearQuery",
              message: "清除搜索词",
            })}
          >
            <IconClear />
          </button>
        )}
      </form>
      <div className={styles.divider} />
      <button className={styles.cancelButton} onClick={closeSearch}>
        <Translate id="tds.search.cancel">取消</Translate>
      </button>
    </div>
  );
};

export default Input;
