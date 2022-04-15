import React from 'react';

const DeleteFile = ({ value }) => {

    return (
        <svg className="block">
            <svg width="11" height="12">
                <defs>
                    <symbol id="icon-delete">
                        <path
                            d="M1.38091 10.6667C1.38091 11.4 2.02377 12 2.80948 12H8.52377C9.30948 12 9.95234 11.4 9.95234 10.6667V2.66667H1.38091V10.6667ZM2.80948 4H8.52377V10.6667H2.80948V4ZM8.16663 0.666667L7.45234 0H3.88091L3.16663 0.666667H0.666626V2H10.6666V0.666667H8.16663Z"
                            fill={value ? '#FF6C3A' : '#3B3E40'}/>
                    </symbol>
                </defs>
            </svg>
            <use xlinkHref="#icon-delete"/>
        </svg>
    );
};

export default DeleteFile;