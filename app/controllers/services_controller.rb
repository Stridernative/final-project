class ServicesController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :review_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_response
skip_before_action :authorized, only: [:index, :show]

    def create
        services = Service.create!(service_params)
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

    def index
        render json: Service.all, status: :ok
    end

    def show
        service = Service.find(params[:id])
        render json: service, status: :ok
    end
    

    private

    def service_params
        params.permit(:title, :image, :information, :service_mileage, :service_area )
    end

    def service_not_found_response
        render json: {error: "Service not found"}, status: :not_found
    end

    def render_unproccessable_response(invalid)
        render json: {error: invalid.record.errors}, status: unprocessable_entity
    end
end
