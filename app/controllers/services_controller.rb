class ServicesController < ApplicationController

    def create
        services = Service.create(service_params)
        render json: service, status: :created
    end

    def update
        found_service = Service.find(params[:id])
        found_service.update(service_params)
        render json: found_service, status: :ok
    end

    def destroy
        deletable_service = Service.find(params[:id])
        deletable_service.destroy
        head :no_content
    end

    

    private

    def service_params
        params.permit(:title, :image, :information, :service_mileage, :service_area )
    end

    def service_not_found_response
        render json: {error: "Service not found"}, status: :not_found
    end
end
