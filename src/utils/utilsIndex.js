// --------------------------------------------------------Imports---------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------

// counselorChecker -- function to check whether the logged in user is a counsellor or not
export const counselorChecker = (loggedInUserData) => {
    if (loggedInUserData?.decodedData?.role?.toString()?.trim() == "Counselor") {
        return true
    } else {
        return false
    }
}


// isCounselorProfileUpdated -- function to check whether the counselor has updated the profile or not
export const isCounselorProfileUpdated = (loggedInUserData) => {
    if (loggedInUserData?.decodedData?.isCounselorProfileUpdated === true) {
        return true;
    } else {
        return false;
    }
}


