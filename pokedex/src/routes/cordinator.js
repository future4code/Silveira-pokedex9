import React, { useState, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom';


export const goToPage = (navigate, page) => {
    navigate(page)
}