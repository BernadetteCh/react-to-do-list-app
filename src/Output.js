import React from "react";

export default function Output(){
    return (
      <div className="Output">
        <form>
          <fieldset>
            <input type="checkbox" value="Milch kaufen" />
            <label>Milch kaufen</label>
            <span>🙉</span>
           <br />
            <input type="checkbox" value="Eier kaufen" />
            <label>Eier kaufen</label>
            <span>🙉</span>
          </fieldset>
        </form>
      </div>
    );
}