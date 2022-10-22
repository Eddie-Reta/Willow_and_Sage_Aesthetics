if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisAdvisoryMessage.react",["cx","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.children;a=a.className;return i.jsx("div",{className:c("joinClasses")("_aady",a),children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMediaBrowserConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;f.POSTS_PER_ROW=a}),66);
__d("PolarisMediaBrowserPostModal.react",["invariant","PolarisPost.react","PolarisPostModal.react","PolarisPostVariants","PolarisQEHelper","PolarisRoutes","PolarispostSelectors","nullthrows","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect;function a(a){var b=a.analyticsContext,e=a.combinedPosts,f=a.mediaLinkBuilder,g=a.modalEntryPath,k=a.onClose,l=a.onImpression,m=a.onOpen,n=a.postId,o=d("react-redux-wwwig").useSelector(function(a){return d("PolarispostSelectors").getDeletedIds(a)});a=e.map(function(a){return a.id});var p=d("react-redux-wwwig").useSelector(function(a){return d("PolarispostSelectors").getPostOrNullById(a,n)});j(function(){p==null&&(o.includes(n)||h(0,51476),k())},[o,k,p,n]);return p==null?null:i.jsx(c("PolarisPostModal.react"),{analyticsContext:b,combinedPostIds:a,dimensions:p.dimensions,mediaLinkBuilder:f,modalEntryPath:g!=null&&g!==""?g:d("PolarisRoutes").FEED_PATH,onClose:k,onOpen:m,postCode:c("nullthrows")(p.code),postId:n,children:i.jsx(c("PolarisPost.react"),{analyticsContext:b+"Modal",autoplay:d("PolarisQEHelper").hasAutoplayEnabledOnPosts(),id:n,isVisible:!0,onImpression:l,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPaddedSectionHeader.react",["cx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.children;return i.jsx("h2",{className:"_aanc",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMediaBrowser.react",["cx","fbt","IGRouter","PolarisAdvisoryMessage.react","PolarisConfig","PolarisLinkBuilder","PolarisMediaBrowserConstants","PolarisMediaBrowserPostModal.react","PolarisMediaImpressionsLogger","PolarisPaddedSectionHeader.react","PolarisSizeCache","PolarisSizing","PolarisUA","PolarisVirtualPostsGrid.react","PolarisVirtualPostsGridConstants","PolarisgetPostFromGraphMediaInterface","PolarisisUserLoggedIn","PolarispostModalHelpers","Polarisunexpected","browserHistory","memoizeStringOnly","nullthrows","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=5,l=12,m=i._("Top posts"),n=i._("Most recent"),o=i._("No posts yet."),p=c("memoizeStringOnly")(function(a){return new(c("PolarisSizeCache"))({estimatedSize:d("PolarisVirtualPostsGridConstants").POSTS_ROW_ESTIMATED_HEIGHT})});function q(a,b){return a.topPosts?[].concat(a.topPosts,b):a.posts}function r(a){return a.topPosts?a.posts.filter(function(b){var c=a.topPosts||[];return!c.some(function(a){return a.id===b.id})}):a.posts}function s(a,b){b={combinedPosts:[],prevValues:{maxPostsToDisplay:a.maxPostsToDisplay,postsLength:a.posts.length},modalEntryPath:b==null?void 0:b.modalEntryPath,modalPostId:b==null?void 0:b.modalPostId,showModal:!!(b==null?void 0:b.showModal),uniquePosts:[],visibleUniquePostsCount:0};if(a.posts.length>0||a.topPosts&&a.topPosts.length>0){var c=r(a);b.uniquePosts=c;b.combinedPosts=q(a,c);if(c.length>0){b.earliestPostIdToDisplay=c[0].id;c=c.length;var e=a.isOldestPostLoaded?0:c%d("PolarisMediaBrowserConstants").POSTS_PER_ROW;b.visibleUniquePostsCount=Math.min(c-e,a.maxPostsToDisplay)}}return b}a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var e;e=a.call(this,b)||this;e.$6=function(a){e.setState({modalEntryPath:e.props.history.location.pathname,modalPostId:a,showModal:!0})};e.$7=function(a,b){e.$6(a);var f=e.state.combinedPosts.find(function(b){return b.id===a});f=f!=null?d("PolarisgetPostFromGraphMediaInterface").getPostMediaType(f):0;f===0&&c("Polarisunexpected")("MediaBrowser: missing media type for post modal log event");d("PolarispostModalHelpers").logPostModalOpen(e.props.analyticsContext,f,"media_browser");if(b!=null){f=e.props;var g=f.isOldestPostLoaded;f=f.maxPostsToDisplay;!g&&e.state.combinedPosts.length-1-b<=k&&e.props.onPostLoadTargetChange(f+l)}};e.$8=function(a,b,c){var f=e.props.onIntentClick;if(f&&!d("PolarisisUserLoggedIn").isUserLoggedIn()&&(d("PolarisUA").isDesktop()||d("PolarisConfig").isNetzDGEligible())&&!d("PolarisConfig").isAllowlistedCrawlBot())a.preventDefault(),f(e.props.history.location.pathname,"profile_posts",e.props.match.params.username,b.id);else if(d("PolarisSizing").shouldSpawnModals(e.props.viewportWidth)){f=e.state.combinedPosts.map(function(a){return a.id}).findIndex(function(a){return a===b.id});e.$7(b.id,f);a.preventDefault()}e.props.onClick&&e.props.onClick(b,c)};e.$4=function(a){e.setState({modalEntryPath:null,modalPostId:null,showModal:!1}),e.props.onPostModalClose&&e.props.onPostModalClose(a)};e.$9=function(a){d("PolarisMediaImpressionsLogger").logImpressionForPost(a,"permalink")};e.$5=function(){var a=e.props,b=a.isOldestPostLoaded;a=a.maxPostsToDisplay;b||e.props.onPostLoadTargetChange(a+l)};e.$13=function(a){var b=e.props.loggingData;if((b==null?void 0:b.hashtagName)!=null)return babelHelpers["extends"]({},b,{hashtagFeedType:a});else if((b==null?void 0:b.entityPageName)!=null)return babelHelpers["extends"]({},b,{feedType:a});return{hashtagFeedType:null,feedType:null}};e.$11=function(a){return j.jsx(c("PolarisVirtualPostsGrid.react"),{PostGridItem:e.props.PostGridItem,analyticsContext:e.props.analyticsContext,hasNextPage:!1,isFetching:!1,loggingData:e.$13("top"),mediaLinkBuilder:e.props.mediaLinkBuilder,onClick:e.$8,onImpression:e.props.onImpression,overscanRowsCount:e.props.overscanRowsCount,posts:a,shouldSpawnModals:d("PolarisSizing").shouldSpawnModals(e.props.viewportWidth),sizeCache:e.$3,visibleCount:a?a.length:0},"virtual_top_posts")};e.state=s(b);e.$2=p(e.props.analyticsContext+"_recentPosts");e.$3=p(e.props.analyticsContext+"_topSetPosts");return e}b.getDerivedStateFromProps=function(a,b){var c=b.prevValues,d=r(a).map(function(a){return a.id}),e=!b.uniquePosts.every(function(a){return d.includes(a.id)});return e||c.maxPostsToDisplay!==a.maxPostsToDisplay?s(a,b):null};var e=b.prototype;e.componentDidMount=function(){var a=this;this.$1=this.props.history.listen(function(b,c){c===d("browserHistory").ACTION.POP&&a.$4()})};e.componentWillUnmount=function(){this.$1()};e.componentDidUpdate=function(a,b){this.state.uniquePosts.length!==b.uniquePosts.length&&this.state.visibleUniquePostsCount===b.visibleUniquePostsCount&&this.$5()};e.renderPhotosComponent=function(){var a=this.state,b=a.combinedPosts;a=a.uniquePosts;if(this.props.hidePhotoComponentRenderer)return null;if(b.length===0&&!this.props.isFetching)return j.jsx(c("PolarisAdvisoryMessage.react"),{className:"_aaq6",children:j.jsx("h2",{className:"_aaq7",children:o})});var d,e;this.props.topPosts&&this.props.topPosts.length>0&&this.props.posts.length===0?(d=this.$10(),e=this.props.noRecentPostExplanation||null):this.props.topPosts&&this.props.topPosts.length===0?(d=this.props.noTopPostExplanation,e=null):b.length===0?d=e=null:a.length===0?(d=null,e=this.props.isTopMediaOnly?this.props.noRecentPostExplanation:this.$11(this.props.topPosts)):(d=this.$10(),this.props.isTopMediaOnly?e=this.props.noRecentPostExplanation:e=this.props.isMostRecentPostNumLimited?this.$11(this.props.posts):this.$12());return[d,e]};e.renderPostModal=function(){var a=c("nullthrows")(this.state.modalPostId);return j.jsx(c("PolarisMediaBrowserPostModal.react"),{analyticsContext:this.props.analyticsContext,combinedPosts:this.state.combinedPosts,mediaLinkBuilder:this.props.mediaLinkBuilder,modalEntryPath:this.state.modalEntryPath,onClose:this.$4,onImpression:this.$9,onOpen:this.$7,postId:a})};e.$10=function(){return!this.props.topPosts||this.props.topPosts.length<1?null:[j.jsxs("div",{className:"_aaq8",children:[j.jsx(c("PolarisPaddedSectionHeader.react"),{children:j.jsxs("div",{className:"_aaq9",children:[m,this.props.isSmallScreen&&this.props.postCount&&j.jsx("div",{className:"_aaqa",children:this.props.postCount})]})}),this.$11(this.props.topPosts)]},"top_posts_container"),!this.props.isTopMediaOnly&&this.props.posts.length>0&&j.jsx(c("PolarisPaddedSectionHeader.react"),{children:n},"most_recent_container")]};e.$12=function(){var a;return j.jsx(c("PolarisVirtualPostsGrid.react"),{PostGridItem:this.props.PostGridItem,allowSampledScrollLogging:this.props.allowSampledScrollLogging,analyticsContext:this.props.analyticsContext,hasNextPage:!this.props.isOldestPostLoaded,isFetching:(a=this.props.isFetching)!=null?a:!1,loggingData:this.$13("recent"),mediaLinkBuilder:this.props.mediaLinkBuilder,onClick:this.$8,onImpression:this.props.onImpression,onNextPage:this.$5,overscanRowsCount:this.props.overscanRowsCount,posts:this.state.uniquePosts,postsPerRow:d("PolarisMediaBrowserConstants").POSTS_PER_ROW,profileUser:this.props.profileUser,shouldSpawnModals:d("PolarisSizing").shouldSpawnModals(this.props.viewportWidth),sizeCache:this.$2,visibleCount:this.state.visibleUniquePostsCount},"virtual_posts_grid")};e.render=function(){return j.jsxs("article",{className:this.props.className,children:[this.props.children,typeof this.props.photoComponentRenderer==="function"?this.props.photoComponentRenderer():this.renderPhotosComponent(),this.state.showModal?this.renderPostModal():null]})};return b}(j.Component);a.defaultProps={mediaLinkBuilder:d("PolarisLinkBuilder").buildMediaLink};b=d("IGRouter").withIGRouter(a);g["default"]=b}),98);