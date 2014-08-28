angular.module('templates-cth', ['block/blockContent.html', 'block/blockItem.html', 'block/blockList.html', 'common/templates/logo-blank.html', 'common/templates/logo.html', 'profile/profiles.html']);

angular.module("block/blockContent.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("block/blockContent.html",
    "<div class=\"markdown\" ng-bind-html=\"blockContent.content\"></div>\n" +
    "");
}]);

angular.module("block/blockItem.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("block/blockItem.html",
    "<section class=\"block {{block.layout}}\"\n" +
    "     id=\"{{block.id}}\" \n" +
    "     ui-sref-active=\"active\" class=\"active\" \n" +
    "     ng-class=\"{selected: block.selected, \n" +
    "     expanded:block.expanded}\">\n" +
    "\n" +
    "    <header class=\"block-header\">\n" +
    "\n" +
    "      <a ng-show=\"!block.selected\" \n" +
    "         class=\"state-link\"\n" +
    "         ng-click=\"toggleExpanded()\"\n" +
    "         ng-href=\"{{block.url}}\">\n" +
    "\n" +
    "        <img ng-src=\"{{block.headerImage.url}}\"/>\n" +
    "\n" +
    "        <h1>{{block.title}}</h1>\n" +
    "\n" +
    "      </a>\n" +
    "      <a ng-show=\"block.selected\" \n" +
    "         class=\"expansion-link\"\n" +
    "         ng-click=\"toggleExpanded()\">\n" +
    "        <img ng-src=\"{{block.headerImage.url}}\"/>\n" +
    "\n" +
    "        <h1>{{block.title}}</h1>\n" +
    "\n" +
    "      </a>\n" +
    "    </header>\n" +
    "\n" +
    "    <ng-switch on=\"block.layout\">\n" +
    "\n" +
    "      <article ng-switch-when=\"profiles\"\n" +
    "           class=\"block-content\">\n" +
    "\n" +
    "        <h1>{{block.title}}</h1>\n" +
    "\n" +
    "        <nav class=\"meta hidden-xs col-sm-3 col-sm-offset-0 col-lg-2 col-lg-offset-0\">\n" +
    "          <table class=\"table\">\n" +
    "            <tr ng-repeat=\"block in blocks\">\n" +
    "              <td><a ng-href=\"{{block.url}}\">{{block.title}}</a></td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "        </nav>\n" +
    "\n" +
    "        <section class=\"profiles col-xs-12 col-sm-7 col-sm-offset-1 col-md-6 col-md-offset-2 col-lg-8 col-lg-offset-1 csSlideUp\">\n" +
    "          <section class=\"profile col-xs-12 col-lg-6\" ng-repeat=\"person in block.people\">\n" +
    "            <img ng-src=\"{{person.picture.url}}\"></img>\n" +
    "            <div ng-bind-html=\"person.profile | markdown\"></div>\n" +
    "          </section>\n" +
    "        </section>\n" +
    "\n" +
    "      </article>\n" +
    "\n" +
    "      <article ng-switch-when=\"pilot\"\n" +
    "           class=\"block-content\">\n" +
    "\n" +
    "        <h1>{{block.title}}</h1>\n" +
    "\n" +
    "        <nav class=\"meta hidden-xs col-sm-3 col-sm-offset-0 col-lg-2 col-lg-offset-0\">\n" +
    "          <table class=\"table\">\n" +
    "            <tr ng-repeat=\"block in blocks\">\n" +
    "              <td><a ng-href=\"{{block.url}}\">{{block.title}}</a></td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "        </nav>\n" +
    "\n" +
    "        <section ng-bind-html=\"block.content | markdown\" \n" +
    "                 class=\"main-text col-xs-12 col-sm-7 col-sm-offset-1 col-md-6 col-md-offset-2 col-lg-5 col-lg-offset-1 csSlideUp\">\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"sidebar right hidden-xs hidden-sm hidden-md col-lg-3 col-lg-offset-1\">\n" +
    "          <div ng-repeat=\"image in block.sideImages\" class=\"col-lg-10 col-lg-offset-0\">\n" +
    "            <img ng-src=\"{{image.url}}\"></img>\n" +
    "          </div>\n" +
    "        </section>\n" +
    "      </article>\n" +
    "\n" +
    "      <article ng-switch-default\n" +
    "               class=\"block-content\">\n" +
    "        <h1>{{block.title}}</h1>\n" +
    "\n" +
    "        <section class=\"sidebar left hidden-xs hidden-sm hidden-md col-lg-3\">\n" +
    "          <div ng-repeat=\"image in block.sideImages\" class=\"col-lg-8 col-lg-offset-1\">\n" +
    "            <img ng-src=\"{{image.url}}\"></img>\n" +
    "          </div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section ng-bind-html=\"block.content | markdown\" \n" +
    "                 class=\"main-text col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-1 col-lg-6 col-lg-offset-0 csSlideUp\">\n" +
    "        </section>\n" +
    "          \n" +
    "\n" +
    "        <section class=\"meta col-xs-12 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1\">\n" +
    "          <table class=\"table\">\n" +
    "            <thead>\n" +
    "              <th>Meta</th>\n" +
    "            </thead>\n" +
    "            <tr ng-repeat=\"author in block.authors\">\n" +
    "              <td>{{author}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "        </section>\n" +
    "      </article>\n" +
    "    </ng-switch>\n" +
    "\n" +
    "  </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("block/blockList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("block/blockList.html",
    "<section ui-sref-active=\"active\" \n" +
    "         class=\"blocks\">\n" +
    "\n" +
    "  <block-item ng-repeat=\"block in blockList.blocks | orderBy:app.postOrder\"\n" +
    "             selected=\"{{block.selected}}\"\n" +
    "             block=\"block\" blocks=\"blockList.blocks\">\n" +
    "  </block-item>\n" +
    "  <div class=\"block empty\"></div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("common/templates/logo-blank.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/logo-blank.html",
    "<svg id=\"logo-blank\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable-background=\"new 0 0 424 244\" xml:space=\"preserve\">\n" +
    "  <g></g>\n" +
    "  <rect x=\"18\" y=\"18\" width=\"282\" height=\"65\" class=\"style0\"/>\n" +
    "  <rect x=\"18\" y=\"90\" width=\"174\" height=\"65\" class=\"style0\"/>\n" +
    "  <rect x=\"18\" y=\"162\" width=\"388\" height=\"65\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "</svg>\n" +
    "");
}]);

angular.module("common/templates/logo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/logo.html",
    "<svg class=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable-background=\"new 0 0 424 244\" xml:space=\"preserve\">\n" +
    "  <g>\n" +
    "  <g>\n" +
    "  <path d=\"M84.6 44.143c-4.02 0-6.3 2.1-6.3 7.44s2.28 7.4 6.3 7.44c4.02 0 6.299-2.1 6.299-7.44 S88.619 44.1 84.6 44.143z\" class=\"logo\"/>\n" +
    "  <path d=\"M222.238 50.803c0 4 1.7 6.7 5.8 6.66c2.46 0 4.08-0.96 5.22-1.98v-9.36 c-1.14-1.02-2.76-1.98-5.22-1.98C223.917 44.1 222.2 46.8 222.2 50.803z\" class=\"style0\"/>\n" +
    "  <path d=\"M114.239 51.583c0 4.5 1.6 7.3 5.6 7.32c2.46 0 4.32-1.02 5.34-1.98v-10.68 c-1.02-0.96-2.88-1.98-5.34-1.98C115.799 44.3 114.2 47.1 114.2 51.583z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 18v65h282V18H18z M152.278 25.664h9.48v8.28h-9.48V25.664z M49.02 58.483c4.2 0 5.879-2.04 6.18-6.72 h8.52c-0.6 9.06-5.28 13.859-14.759 13.859c-11.22 0-15.6-6.72-15.6-17.699c0-11.16 4.5-18.299 16.02-18.299 c9.359 0 13.9 4.7 14.3 13.919H55.2c-0.3-4.68-2.16-6.78-6.3-6.78c-5.82 0-6.96 4.14-6.96 10.859S43.08 58.5 49 58.483z M84.419 65.623c-7.02 0-14.459-3.18-14.459-13.919c0-10.979 7.8-14.1 14.819-14.1c7.08 0 14.5 3.2 14.5 13.9 C99.239 62.4 91.4 65.6 84.4 65.623z M133.258 65.022h-7.14v-3.6c-1.32 1.92-4.38 4.2-8.939 4.2 c-6.24 0-11.28-4.32-11.28-13.979c0-10.02 5.46-14.04 11.28-14.04c4.379 0 7 2.3 8 3.48V25.664h8.04V65.022z M169.258 65.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V65.022z M205.197 65.022h-8.04V49.843 c0-3.78-0.96-5.52-4.2-5.52c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04V38.204h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2 c4.8 0 9.4 2.5 9.4 10.8V65.022z M241.257 65.442c0 7.62-4.979 11.28-13.919 11.28c-5.64 0-12.54-1.44-12.839-10.62h7.68 c0.24 2.5 1.2 4.8 5.6 4.8c4.92 0 5.46-2.88 5.46-6.12v-4.14c-1.32 1.5-3.6 3.36-7.8 3.36c-6.419 0-11.52-4.32-11.52-13.08 c0-8.819 5.22-13.319 11.58-13.319c4.32 0 7.4 2.1 8.6 4.02v-3.42h7.14V65.442z M281.276 71.982h-33.359v-6.959h33.359V71.982z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  <g>\n" +
    "  <path d=\"M120.599 115.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C125.938 116.7 123.3 115.7 120.6 115.664z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 90v65h174V90H18z M62.699 116.263H49.44v8.58c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56 v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V116.263z M97.199 137.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52c-2.64 0-4.26 1.2-4.92 1.92v18.779H72V97.664h8.04v15.479 c1.14-1.38 3.3-3.54 7.919-3.54c4.92 0 9.2 2.5 9.2 10.8V137.022z M135.058 124.963h-20.759c0 3.8 1.9 6.6 6.8 6.6 c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16 c7.439 0 14.2 3.5 14.2 13.979V124.963z M173.278 143.982h-33.359v-6.959h33.359V143.982z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  <g>\n" +
    "  <path d=\"M336.596 187.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C341.936 188.7 339.3 187.7 336.6 187.664z\" class=\"style0\"/>\n" +
    "  <path d=\"M150.239 201.643c0 1.7 1.4 2.5 3.8 2.46c3.24 0 5.82-1.26 6.66-1.98v-2.76 c-0.84-0.18-3.3-0.36-5.22-0.36C152.458 199 150.2 199.5 150.2 201.643z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 162v65h388v-65H18z M296.276 169.664h9.48v8.28h-9.48V169.664z M224.277 169.664h9.48v8.28h-9.48 V169.664z M61.199 209.022H52.86v-14.219h-8.52v14.219H36v-34.739h8.339v13.56h8.52v-13.56h8.339V209.022z M97.199 209.022h-7.14 v-3.6c-1.32 1.98-4.08 4.2-8.64 4.2c-4.8 0-9.419-2.46-9.419-10.8v-16.619h8.04v15.179c0 3.8 1 5.5 4.2 5.5 c2.16 0 3.72-0.72 4.92-1.92v-18.779h8.04V209.022z M135.958 209.022h-6.899v-17.519c0-2.4-0.42-3.72-1.98-3.72 c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.839v-17.519c0-2.4-0.42-3.72-1.98-3.72c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.9v-26.819h6 v3.66c0.84-1.5 2.82-4.26 6.72-4.26c3.18 0 4.9 1.9 5.5 3.9c0.48-0.78 2.4-3.9 6.479-3.9c4.86 0 6.1 4.4 6.1 9.06V209.022z M172.258 208.422c-1.2 0.6-3.48 1.2-5.58 1.2c-3.54 0-4.68-1.68-4.68-3.84v-0.54c-1.38 1.74-4.38 4.38-10.08 4.4 c-5.28 0-9.719-2.34-9.719-7.74c0-6.12 5.64-7.86 11.459-7.86c3.06 0 5.8 0.5 7.1 0.84v-2.04c0-2.88-0.66-5.04-4.98-5.04 c-3.06 0-5.16 1.08-5.16 3.84h-7.5c0-7.08 5.64-10.02 13.139-10.02c6.9 0 12.5 2.5 12.5 10.56v10.02 c0 1 0.4 1.4 1.4 1.38c0.66 0 1.62-0.18 2.1-0.3V208.422z M205.197 209.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52 c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04v-26.819h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2c4.8 0 9.4 2.5 9.4 10.8V209.022z M241.257 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V209.022z M278.696 188.263h-13.259v8.58 c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479 v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V188.263z M313.256 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759 h8.22V209.022z M351.055 196.963h-20.759c0 3.8 1.9 6.6 6.8 6.6c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9 c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16c7.439 0 14.2 3.5 14.2 13.979V196.963z M372.235 209.6 c-7.68-0.06-13.919-2.16-14.099-9h8.219c0.24 2.6 2.9 3.3 6.5 3.3c3.12 0 5.88-0.54 5.88-2.46c0-2.22-3.9-2.4-9.18-3.24 c-5.16-0.84-10.86-2.16-10.86-8.16c0-5.939 5.64-8.459 13.68-8.459c7.02 0 12.7 1.9 13.1 8.52h-8.22 c-0.36-2.28-3-2.82-5.64-2.82c-2.82 0-4.68 0.6-4.68 2.16c0 1.9 2.9 2.2 9.2 3.06c5.28 0.7 10.9 2.2 10.9 8.3 C387.055 207.5 380.3 209.7 372.2 209.623z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  </g>\n" +
    "</svg>\n" +
    "<!-- <section id=\"logo\"> -->\n" +
    "<!--   <svg id=\"logo&#45;blank\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable&#45;background=\"new 0 0 424 244\" xml:space=\"preserve\"> -->\n" +
    "<!--     <g></g> -->\n" +
    "<!--     <rect x=\"18\" y=\"18\" width=\"282\" height=\"65\" class=\"style0\"/> -->\n" +
    "<!--     <rect x=\"18\" y=\"90\" width=\"174\" height=\"65\" class=\"style0\"/> -->\n" +
    "<!--     <rect x=\"18\" y=\"162\" width=\"388\" height=\"65\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--   </svg> -->\n" +
    "<!--  -->\n" +
    "<!--   <svg id=\"logo&#45;text\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable&#45;background=\"new 0 0 424 244\" xml:space=\"preserve\"> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <path d=\"M84.6 44.143c&#45;4.02 0&#45;6.3 2.1&#45;6.3 7.44s2.28 7.4 6.3 7.44c4.02 0 6.299&#45;2.1 6.299&#45;7.44 S88.619 44.1 84.6 44.143z\" class=\"logo\"/> -->\n" +
    "<!--     <path d=\"M222.238 50.803c0 4 1.7 6.7 5.8 6.66c2.46 0 4.08&#45;0.96 5.22&#45;1.98v&#45;9.36 c&#45;1.14&#45;1.02&#45;2.76&#45;1.98&#45;5.22&#45;1.98C223.917 44.1 222.2 46.8 222.2 50.803z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M114.239 51.583c0 4.5 1.6 7.3 5.6 7.32c2.46 0 4.32&#45;1.02 5.34&#45;1.98v&#45;10.68 c&#45;1.02&#45;0.96&#45;2.88&#45;1.98&#45;5.34&#45;1.98C115.799 44.3 114.2 47.1 114.2 51.583z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M18 18v65h282V18H18z M152.278 25.664h9.48v8.28h&#45;9.48V25.664z M49.02 58.483c4.2 0 5.879&#45;2.04 6.18&#45;6.72 h8.52c&#45;0.6 9.06&#45;5.28 13.859&#45;14.759 13.859c&#45;11.22 0&#45;15.6&#45;6.72&#45;15.6&#45;17.699c0&#45;11.16 4.5&#45;18.299 16.02&#45;18.299 c9.359 0 13.9 4.7 14.3 13.919H55.2c&#45;0.3&#45;4.68&#45;2.16&#45;6.78&#45;6.3&#45;6.78c&#45;5.82 0&#45;6.96 4.14&#45;6.96 10.859S43.08 58.5 49 58.483z M84.419 65.623c&#45;7.02 0&#45;14.459&#45;3.18&#45;14.459&#45;13.919c0&#45;10.979 7.8&#45;14.1 14.819&#45;14.1c7.08 0 14.5 3.2 14.5 13.9 C99.239 62.4 91.4 65.6 84.4 65.623z M133.258 65.022h&#45;7.14v&#45;3.6c&#45;1.32 1.92&#45;4.38 4.2&#45;8.939 4.2 c&#45;6.24 0&#45;11.28&#45;4.32&#45;11.28&#45;13.979c0&#45;10.02 5.46&#45;14.04 11.28&#45;14.04c4.379 0 7 2.3 8 3.48V25.664h8.04V65.022z M169.258 65.022h&#45;25.319v&#45;6.06h9.06v&#45;14.7h&#45;9.06v&#45;6.06h17.099v20.759h8.22V65.022z M205.197 65.022h&#45;8.04V49.843 c0&#45;3.78&#45;0.96&#45;5.52&#45;4.2&#45;5.52c&#45;2.16 0&#45;3.72 0.72&#45;4.92 1.92v18.779h&#45;8.04V38.204h7.14v3.6c1.32&#45;1.979 4.08&#45;4.2 8.64&#45;4.2 c4.8 0 9.4 2.5 9.4 10.8V65.022z M241.257 65.442c0 7.62&#45;4.979 11.28&#45;13.919 11.28c&#45;5.64 0&#45;12.54&#45;1.44&#45;12.839&#45;10.62h7.68 c0.24 2.5 1.2 4.8 5.6 4.8c4.92 0 5.46&#45;2.88 5.46&#45;6.12v&#45;4.14c&#45;1.32 1.5&#45;3.6 3.36&#45;7.8 3.36c&#45;6.419 0&#45;11.52&#45;4.32&#45;11.52&#45;13.08 c0&#45;8.819 5.22&#45;13.319 11.58&#45;13.319c4.32 0 7.4 2.1 8.6 4.02v&#45;3.42h7.14V65.442z M281.276 71.982h&#45;33.359v&#45;6.959h33.359V71.982z\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <path d=\"M120.599 115.664c&#45;2.7 0&#45;5.339 1.02&#45;6.18 4.439h12.36C125.938 116.7 123.3 115.7 120.6 115.664z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M18 90v65h174V90H18z M62.699 116.263H49.44v8.58c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34&#45;0.84 7.14&#45;1.56 v6.3c&#45;1.98 0.9&#45;5.1 1.92&#45;9.18 1.92c&#45;7.08 0&#45;10.859&#45;3.12&#45;10.859&#45;12.479v&#45;8.88h&#45;8.34v&#45;6.06h8.34v&#45;12.54h8.04v12.54h13.259V116.263z M97.199 137.022h&#45;8.04v&#45;15.179c0&#45;3.78&#45;0.96&#45;5.52&#45;4.2&#45;5.52c&#45;2.64 0&#45;4.26 1.2&#45;4.92 1.92v18.779H72V97.664h8.04v15.479 c1.14&#45;1.38 3.3&#45;3.54 7.919&#45;3.54c4.92 0 9.2 2.5 9.2 10.8V137.022z M135.058 124.963h&#45;20.759c0 3.8 1.9 6.6 6.8 6.6 c3 0 5.22&#45;1.02 5.58&#45;2.94h8.28c&#45;1.44 6.72&#45;7.44 9&#45;13.919 9c&#45;8.34 0&#45;14.879&#45;3.78&#45;14.879&#45;13.859c0&#45;10.8 7.5&#45;14.16 14.699&#45;14.16 c7.439 0 14.2 3.5 14.2 13.979V124.963z M173.278 143.982h&#45;33.359v&#45;6.959h33.359V143.982z\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--     <g> -->\n" +
    "<!--     <path d=\"M336.596 187.664c&#45;2.7 0&#45;5.339 1.02&#45;6.18 4.439h12.36C341.936 188.7 339.3 187.7 336.6 187.664z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M150.239 201.643c0 1.7 1.4 2.5 3.8 2.46c3.24 0 5.82&#45;1.26 6.66&#45;1.98v&#45;2.76 c&#45;0.84&#45;0.18&#45;3.3&#45;0.36&#45;5.22&#45;0.36C152.458 199 150.2 199.5 150.2 201.643z\" class=\"style0\"/> -->\n" +
    "<!--     <path d=\"M18 162v65h388v&#45;65H18z M296.276 169.664h9.48v8.28h&#45;9.48V169.664z M224.277 169.664h9.48v8.28h&#45;9.48 V169.664z M61.199 209.022H52.86v&#45;14.219h&#45;8.52v14.219H36v&#45;34.739h8.339v13.56h8.52v&#45;13.56h8.339V209.022z M97.199 209.022h&#45;7.14 v&#45;3.6c&#45;1.32 1.98&#45;4.08 4.2&#45;8.64 4.2c&#45;4.8 0&#45;9.419&#45;2.46&#45;9.419&#45;10.8v&#45;16.619h8.04v15.179c0 3.8 1 5.5 4.2 5.5 c2.16 0 3.72&#45;0.72 4.92&#45;1.92v&#45;18.779h8.04V209.022z M135.958 209.022h&#45;6.899v&#45;17.519c0&#45;2.4&#45;0.42&#45;3.72&#45;1.98&#45;3.72 c&#45;1.5 0&#45;2.7 1.32&#45;3.06 1.92v19.319h&#45;6.839v&#45;17.519c0&#45;2.4&#45;0.42&#45;3.72&#45;1.98&#45;3.72c&#45;1.5 0&#45;2.7 1.32&#45;3.06 1.92v19.319h&#45;6.9v&#45;26.819h6 v3.66c0.84&#45;1.5 2.82&#45;4.26 6.72&#45;4.26c3.18 0 4.9 1.9 5.5 3.9c0.48&#45;0.78 2.4&#45;3.9 6.479&#45;3.9c4.86 0 6.1 4.4 6.1 9.06V209.022z M172.258 208.422c&#45;1.2 0.6&#45;3.48 1.2&#45;5.58 1.2c&#45;3.54 0&#45;4.68&#45;1.68&#45;4.68&#45;3.84v&#45;0.54c&#45;1.38 1.74&#45;4.38 4.38&#45;10.08 4.4 c&#45;5.28 0&#45;9.719&#45;2.34&#45;9.719&#45;7.74c0&#45;6.12 5.64&#45;7.86 11.459&#45;7.86c3.06 0 5.8 0.5 7.1 0.84v&#45;2.04c0&#45;2.88&#45;0.66&#45;5.04&#45;4.98&#45;5.04 c&#45;3.06 0&#45;5.16 1.08&#45;5.16 3.84h&#45;7.5c0&#45;7.08 5.64&#45;10.02 13.139&#45;10.02c6.9 0 12.5 2.5 12.5 10.56v10.02 c0 1 0.4 1.4 1.4 1.38c0.66 0 1.62&#45;0.18 2.1&#45;0.3V208.422z M205.197 209.022h&#45;8.04v&#45;15.179c0&#45;3.78&#45;0.96&#45;5.52&#45;4.2&#45;5.52 c&#45;2.16 0&#45;3.72 0.72&#45;4.92 1.92v18.779h&#45;8.04v&#45;26.819h7.14v3.6c1.32&#45;1.979 4.08&#45;4.2 8.64&#45;4.2c4.8 0 9.4 2.5 9.4 10.8V209.022z M241.257 209.022h&#45;25.319v&#45;6.06h9.06v&#45;14.7h&#45;9.06v&#45;6.06h17.099v20.759h8.22V209.022z M278.696 188.263h&#45;13.259v8.58 c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34&#45;0.84 7.14&#45;1.56v6.3c&#45;1.98 0.9&#45;5.1 1.92&#45;9.18 1.92c&#45;7.08 0&#45;10.859&#45;3.12&#45;10.859&#45;12.479 v&#45;8.88h&#45;8.34v&#45;6.06h8.34v&#45;12.54h8.04v12.54h13.259V188.263z M313.256 209.022h&#45;25.319v&#45;6.06h9.06v&#45;14.7h&#45;9.06v&#45;6.06h17.099v20.759 h8.22V209.022z M351.055 196.963h&#45;20.759c0 3.8 1.9 6.6 6.8 6.6c3 0 5.22&#45;1.02 5.58&#45;2.94h8.28c&#45;1.44 6.72&#45;7.44 9&#45;13.919 9 c&#45;8.34 0&#45;14.879&#45;3.78&#45;14.879&#45;13.859c0&#45;10.8 7.5&#45;14.16 14.699&#45;14.16c7.439 0 14.2 3.5 14.2 13.979V196.963z M372.235 209.6 c&#45;7.68&#45;0.06&#45;13.919&#45;2.16&#45;14.099&#45;9h8.219c0.24 2.6 2.9 3.3 6.5 3.3c3.12 0 5.88&#45;0.54 5.88&#45;2.46c0&#45;2.22&#45;3.9&#45;2.4&#45;9.18&#45;3.24 c&#45;5.16&#45;0.84&#45;10.86&#45;2.16&#45;10.86&#45;8.16c0&#45;5.939 5.64&#45;8.459 13.68&#45;8.459c7.02 0 12.7 1.9 13.1 8.52h&#45;8.22 c&#45;0.36&#45;2.28&#45;3&#45;2.82&#45;5.64&#45;2.82c&#45;2.82 0&#45;4.68 0.6&#45;4.68 2.16c0 1.9 2.9 2.2 9.2 3.06c5.28 0.7 10.9 2.2 10.9 8.3 C387.055 207.5 380.3 209.7 372.2 209.623z\" class=\"style0\"/> -->\n" +
    "<!--     </g> -->\n" +
    "<!--   </g> -->\n" +
    "<!--   </svg> -->\n" +
    "<!-- </section> -->\n" +
    "");
}]);

angular.module("profile/profiles.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profiles.html",
    "<section class=\"profiles col-xs-12\"> \n" +
    "  <section class=\"profile row\">\n" +
    "    <header class=\"col-xs-12 col-lg-5\">\n" +
    "      <img ng-src=\"./images/students/angeliki-large.jpg\"/>\n" +
    "    </header>\n" +
    "    <!-- <section class=\"meta col&#45;xs&#45;6 col&#45;lg&#45;2\"> -->\n" +
    "    <!--   <table class=\"table\"> -->\n" +
    "    <!--     <thead> -->\n" +
    "    <!--       <th>Roel Bakkum</th> -->\n" +
    "    <!--     </thead> -->\n" +
    "    <!--     <tr> -->\n" +
    "    <!--       <td>Musicology</td> -->\n" +
    "    <!--     </tr> -->\n" +
    "    <!--   </table> -->\n" +
    "    <!-- </section> -->\n" +
    "    <section class=\"motivation col-xs-10 col-xs-offset-1 col-lg-5 col-lg-offset-1\">\n" +
    "      <p>\"My study, art history, is one that can be quite traditional, but is also one that is adapting to the digital world rather fast. I would love to widen my understanding of these processes and participate in them through this course. Had there been any suitable courses in the third block I probably would not have been able to participate, but since there were none I have the time. Next to that I have always had an affinity with information technology, but I never really got into it: this seems like a good opportunity!\"</p>\n" +
    "    </section>\n" +
    "  </section>\n" +
    "\n" +
    "  <div ng-repeat=\"gallery in galleries\" class=\"row slideshow\">\n" +
    "    <carousel ng-class=\"'visible-' + gallery.pageSize + '-block'\">\n" +
    "      <slide ng-repeat=\"slide in gallery.profiles\" active=\"slide.active\">\n" +
    "        <div ng-repeat=\"profile in slide\">\n" +
    "          <img ng-src=\"{{profile.image.url}}\" ng-class=\"'col-xs-' + gallery.colSize\">\n" +
    "        </div>\n" +
    "      </slide> </carousel>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</section>\n" +
    "");
}]);
