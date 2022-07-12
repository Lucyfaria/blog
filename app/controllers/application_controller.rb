class ApplicationController < ActionController::Base
    def person_params
        params.require(:person).permit(:username)
      end
end
