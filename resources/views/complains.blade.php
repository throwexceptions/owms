@extends('layouts.bs5')

@section('content')
    <div id="app" class="row">
        <div class="col-md-4 d-none d-sm-block mt-4">
            <div class="row">
                <div class="col-12 text-center">
                    <img src="{{ asset('tabang-logo/vector/default.png') }}" width="250px" height="250px"
                         class="img-fluid">
                </div>
                <div class="col-12">
                    <div id='map' style='width: 100%; height: 300px;'></div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-8 p-4">
            <form action="{{ route('complains.submit') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <input name="agency_id" value="{{ $agency_id }}" hidden>
                <div class="row">
                    <div class="col-12 rounded-3 shadow" style="background-color: rgb(243 243 243)">
                        <div class="row justify-content-md-center">
                            <div class="col-auto mt-3">
                                <h2 style="font-family: 'Dela Gothic One', cursive;">General Complaint Form</h2>
                            </div>
                            <div class="col-12">
                            </div>
                            <div class="col-md-6 text-center text-primary">
                                <p>Kung isa kang OFW at kailangan mo ng tulong maari lamang lagdaan ang nararapat na
                                    impormasyon sa ibaba.</p>
                            </div>
                        </div>
                        <div class="row p-2">
                            <div class="col-12">
                                <p class="fs-3"><u>General Information / Pangkalahatang Impormasyon</u></p>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">First Name / Pangalan</label>
                                <input type="text" class="form-control" name="first_name">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Middle Name / Gitnang Pangalan</label>
                                <input type="text" class="form-control" name="middle_name">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Last Name / Huling Pangalan</label>
                                <input type="text" class="form-control" name="last_name">
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Gender / Kasarian</label>
                                <select class="form-control" name="gender">
                                    <option>Male / Lalaki</option>
                                    <option>Female / Babae</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                                <label class="form-label">Passport Number</label>
                                <input type="text" class="form-control" name="passport">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">IQAMA / National ID</label>
                                <input type="text" class="form-control" name="national_id">
                            </div>
                            <div class="col-12">
                                <p class="fs-3"><u>Contact Information / Impormasyon sa Pakikipag-ugnay</u></p>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Location / Lokasyon</label>
                                <input type="text" class="form-control" name="location_ksa">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Email</label>
                                <input type="text" class="form-control" name="email_address">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Contact #1</label>
                                <input type="text" class="form-control" name="contact_number">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Contact #2</label>
                                <input type="text" class="form-control" name="contact_number2">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Person in case of emergency contact / Tao kung sakaling
                                    magkaroon ng emergency contact</label>
                                <input type="text" class="form-control" name="contact_person">
                            </div>
                            <div class="col-12">
                                <p class="fs-3"><u>Job Information / Impormasyon sa Trabaho</u></p>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="occupation"
                                           value="Household Service Workers" checked="">
                                    <label class="form-check-label">
                                        House Service Workers (e.g. Domestic Worker, Driver, Gardener etc.)
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="occupation"
                                           value="Highly Skilled">
                                    <label class="form-check-label">
                                        Highly Skilled (e.g. Wielder, Plumber, Beautician, Office Worker, Assistant
                                        Nurse,
                                        Computer Technician etc.)
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="occupation" value="Low Skilled">
                                    <label class="form-check-label">
                                        Low Skilled (e.g. Construction Worker, Laborers, Cook and Waiter etc.)
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="occupation" value="Nurse">
                                    <label class="form-check-label">
                                        Nurse
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="occupation"
                                           value="Skilled Professional">
                                    <label class="form-check-label">
                                        Skilled Professional (e.g. Engineer, Doctor, Dentist, Architects, Accountants
                                        etc.)
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="occupation" value="Nurse">
                                    <label class="form-check-label">
                                        Sea-based
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <p class="fs-3"><u>Employer Information /
                                        Impormasyon ng Amo</u></p>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Local Agency</label>
                                <input type="text" class="form-control" name="agency">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Abroad Agency</label>
                                <input type="text" class="form-control" name="host_agency">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Employer's IQAMA / National ID</label>
                                <input type="text" class="form-control" name="employer_national_id">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Employer Name / Pangalan ng Amo</label>
                                <input type="text" class="form-control" name="employer_name">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Employer Contact / Numero ng Amo</label>
                                <input type="text" class="form-control" name="employer_contact">
                            </div>
                            <div class="col-12">
                                <p class="fs-3"><u>Complain Section / <i>Reklamo</i></u></p>
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Please fill up below</label>
                                <textarea type="text" class="form-control" rows="8" name="complain"></textarea>
                            </div>
                            <div class="col-12">
                                <p class="fs-3"><u>Evidences / Ebidensya</u></p>
                            </div>
                            <div class="col-auto">
                                <label class="form-label">Image #1 / Unang Imahe</label>
                                <input class="form-control" type="file" name="image1">
                            </div>
                            <div class="col-auto">
                                <label class="form-label">Image #2 / Pangalawang Imahe</label>
                                <input class="form-control" type="file" name="image2">
                            </div>
                            <div class="col-auto">
                                <label class="form-label">Image #3 / Pangatlong Imahe</label>
                                <input class="form-control" type="file" name="image3">
                            </div>
                            <input class="form-control" name="actual_langitude" hidden>
                            <input class="form-control" name="actual_longitude" hidden>
                            <div class="col-12 mt-5">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success">Submit / Ipasa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-md-4 d-sm-none d-block mt-4">
            <div id='map2' style='width: 100%; height: 300px;'></div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet'/>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script>
        mapboxgl.accessToken =
            'pk.eyJ1IjoicmVuaWVyLXRyZW51ZWxhIiwiYSI6ImNrZHhya2l3aTE3OG0ycnBpOWxlYjV3czUifQ.4hVvT7_fiVshoSa9P3uAew';

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }

        $('#cb-btn').on('click', function () {
            $('.loading').removeAttr('hidden', 'hidden');
        });

        function showPosition(position) {
            $('[name="actual_langitude"]').val(position.coords.latitude);
            $('[name="actual_longitude"]').val(position.coords.longitude);

            $('#cb-btn').removeAttr('disabled');

            $('.loading').attr('hidden', 'hidden');

            var map = new mapboxgl.Map({
                container: 'map',
                center: [position.coords.longitude, position.coords.latitude],
                zoom: 15,
                style: 'mapbox://styles/mapbox/satellite-streets-v10'
            });

            var map2 = new mapboxgl.Map({
                container: 'map2',
                center: [position.coords.longitude, position.coords.latitude],
                zoom: 15,
                style: 'mapbox://styles/mapbox/satellite-streets-v10'
            });

            var marker = new mapboxgl.Marker()
                .setLngLat([position.coords.longitude, position.coords.latitude])
                .addTo(map);

            var marker2 = new mapboxgl.Marker()
                .setLngLat([position.coords.longitude, position.coords.latitude])
                .addTo(map2);
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    swal.fire({
                        html: '<img src="/images/owwa.png" width="120"/><img src="/images/dfa.png" width="120"/><img src="/images/polo.png" width="120"/>' +
                            '<div class="swal2-header" style=\'margin-top:5px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; padding: 0px 1.8em; -webkit-tap-highlight-color: transparent; color: rgb(33, 37, 41); font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\'>\n' +
                            '    <h2 class="swal2-title" style="box-sizing: border-box; margin: 0px 0px 0.4em; font-weight: 600; font-size: 1.875em; position: relative; max-width: 100%; padding: 0px; color: rgb(89, 89, 89); text-align: center; text-transform: none; overflow-wrap: break-word; -webkit-tap-highlight-color: transparent; display: block; line-height: 1;">GPS Required<br><span style="font-size: 26px;"><em>(GPS ay kailangan)</em></span></h2>\n' +
                            '</div>\n' +
                            '<div class="swal2-content" style=\'box-sizing: border-box; z-index: 1; justify-content: center; margin: 0px; padding: 0px 1.6em; color: rgb(84, 84, 84); font-size: 1.125em; font-weight: 400; line-height: normal; text-align: center; overflow-wrap: break-word; -webkit-tap-highlight-color: transparent; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\'>\n' +
                            '    <div class="swal2-html-container" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; display: block;">Please enable the GPS locator to continue<br style="box-sizing: border-box;"><i style="box-sizing: border-box;">Maari lamang buksan ang GPS upang magpatuloy</i></div>\n' +
                            '</div>',
                        focusConfirm: false,
                        confirmButtonText: 'GPS has been enabled!<br><i>Bukas na ang GPS!</i>',
                        confirmButtonAriaLabel: 'Thumbs up, great!',
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            window.location = "/form"
                        }
                    });
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
            }
        }

    </script>
@endsection
