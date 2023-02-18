window.ProductController = function (
  $scope,
  $rootScope,
  $http,
  $timeout,
  $cookies,
  $location
) {
  $rootScope.myLayout = String($location.path()).includes("/admin");
  $scope.c_filter = {
    category: {},
  };
  $rootScope.user = $cookies.getObject("user");
  $rootScope.listProducts = [];
  $rootScope.listCategories = [];
  $http.get(productAPI).then(function (response) {
    $rootScope.listProducts = response.data;
  });
  $http.get(categoryAPI).then(function (response) {
    $rootScope.listCategories = response.data;
  });
  $scope.filterByCategory = function (c) {
    $scope.c_filter.category.id = c.id;
  };
  angular.element(document).ready(function () {
    $timeout(function () {
      angular.element(document.querySelector(".owl-carousel")).owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });
    }, 300);
  });
};
