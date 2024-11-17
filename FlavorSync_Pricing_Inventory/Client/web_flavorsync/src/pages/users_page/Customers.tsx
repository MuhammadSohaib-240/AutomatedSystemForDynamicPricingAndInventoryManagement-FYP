import ComboBox from "../../components/combo_box/ComboBox";
import UserGrid from "../../components/user_grid/UserGrid";
import ComponentTitle from "../../components/titles/component_title/ComponentTitle";
import "./Customers.scss";

const Customers = () => {
  const options = ["Framer", "Sketch", "Invision Studio", "Figma", "Adobe XD"];

  const applyFilters = () => {
    // Implement your filter logic here
    // Update the tableData state with the filtered data
    // Example: setTableData(filteredData);
  };

  // Function to clear filters and reset the table data
  const clearFilters = () => {
    // Reset the tableData state to the original data
  };

  // Callback function to update values when selected in ComboBox
  const handleComboBoxChange = (selectedOption: string) => {
    console.log(selectedOption);
  };

  return (
    <>
      <div className="customers-component">
        <ComponentTitle title="Customers Management" />
        <form className="row1">
          <div className="container">
            <div className="filters-wrapper">
              <ComboBox
                options={options}
                selectedOption={options[0]}
                onSelect={handleComboBoxChange}
              />
              <ComboBox
                options={options}
                selectedOption={options[0]}
                onSelect={handleComboBoxChange}
              />
              <ComboBox
                options={options}
                selectedOption={options[0]}
                onSelect={handleComboBoxChange}
              />
              <ComboBox
                options={options}
                selectedOption={options[0]}
                onSelect={handleComboBoxChange}
              />
              <ComboBox
                options={options}
                selectedOption={options[0]}
                onSelect={handleComboBoxChange}
              />
            </div>
            <div className="buttons-wrapper">
              <button className="submit-button" onClick={applyFilters}>
                Apply
              </button>
              <button className="clear-button" onClick={clearFilters}>
                Clear
              </button>
            </div>
          </div>
        </form>

        <div className="row2">
          <UserGrid />
        </div>
      </div>
    </>
  );
};

export default Customers;
