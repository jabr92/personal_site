#!/bin/bash
gnome-terminal --tab -e "sass --watch JABR_site_styles.scss:css/JABR_site_styles.css" --tab -e "sass --watch JABR_home_styles.scss:css/JABR_home_styles.css"