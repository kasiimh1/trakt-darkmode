// ==UserScript==
// @name         Trakt DarkMode
// @namespace    https://github.com/kasiimh1
// @version      0.2
// @description  Dark themes > light themes, enjoy!
// @author       Kasim Hussain
// @match        https://trakt.tv/*
// @grant        GM_addStyle
// ==/UserScript==

var darkMode=`

#activity-wrapper,#charts-wrapper,#schedule-wrapper,#charts-minutes-total,#charts-movies-total,
#charts-episodes-total,#ondeck-wrapper,#footer-search,#main-search,#charts-minutes-wrapper,
#info-wrapper,div.subnav-wrapper,#huckster-content-page,.subnav-wrapper,.interactions,
#progress-wrapper.watched,.comment-wrapper .list .subnav .wider .hidden-xs,.seasons,#recent-wrapper,
.prev a, .next a,.prev.disabled a, .next.disabled a, .comment-wrapper,#history-items,#collection-items,
#rating-items,section.container.list-rows,#user-comments,#network-user-wrapper, section,.tab.selected,
.above-comment,.users-wrapper,#huckster-desktop-wrapper,.huckster-vip-info,.alert.alert-no-data, h4.character
{
color: white !important;
background-color: #222 !important;
}

div.shade{
display: none !important;
}

// fix 
//.mCSB_draggerContainer


.popup-video.one-liner.trailer
{
background-color: red !important;
}

.see-more-text, h4 a,div.trakt-icon-circle-right.fa, h3 a,season.toggle,.link,p a,.name
color:white !important;{
color: #54C7FC !important;
}

.progress-bar,.page.active{
background-color: #54C7FC !important;
}

.base{
border:0px !important;
border-color: #222;
}

.metadata,.quick-icons.smaller{
border:0px !important;
}

h2.section,span.trakt-icon-time-play,span.main-title-sxe,a.titles-link,a.ignore, a.selected,.runtime,.elapsed,
.percentage,.icon.trakt-icon-alarm,.feed-icon,.icon.trakt-icon-rss, h3, span.plays,label, .icon.trakt-icon-divider,
icon .trakt-icon-calendar-add,.btn-list-subscribe,.count-text,.icon.trakt-icon-move{
color: white !important;
}

.poster{
border-color: #222 !important;
}

.titles,.episode-stats.hidden-sm,
.btn.btn-block.btn-summary.btn-collect,.btn.btn-block.btn-summary.btn-list,
.btn.btn-block.btn-summary.btn-comment.new-comment-focus
{
background-color: #222 !important;
color: white !important;
}

`
GM_addStyle(darkMode);
