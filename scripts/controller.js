angular.module('app')
  .controller('mainCtrl', function($scope, myService) {

  $scope.saveNote = function(newNote) {
    myService.addNote(newNote);
  };

  function getNotes(){
    myService.getNotes().then(function(response) {
      $scope.notes = response;
      console.log($scope.notes);
    });
  }
  getNotes();

  }); //end controller
