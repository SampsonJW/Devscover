import React, { useState } from 'react';

function SearchBar() {

    return (
        <div class="card background-searchbar">
            <div class="card-body">
                <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2">
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                </form>
            </div>
        </div>
    );
}

export default SearchBar;