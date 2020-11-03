# Buggy

Buggy is a react app for dealing with bugreports.

## Installation

The database is ready to use for everyone. Only people that has an account will be able to see information though.

## Usage

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: POST addRequest (example)

### Description:

Method: POST

> https://us-central1-bugger-d1c9b.cloudfunctions.net/addReport

### Body (**raw**)

```json
{
  "mailTo": "your@email.com", // <-- Important step
  "resolution": "1920x1080",
  "dpi": "420",
  "connectivity": "wifi",
  "device_id": "ESv0TnsEbfCs",
  "device_name": "Kalles iPhone",
  "device_available_storage": "128 GB",
  "device_flight_mode": false,
  "device_bluetooth": true,
  "device_orientation": "landscape",
  "device_wifi_signal_strength": "98",
  "device_available_ram": "1286 MB",
  "device_processor": "A13 Bionic",
  "device_build_number": "jkn7QFw6LK02",
  "device_sim": "WDeAoBIB1mja",
  "device_ip_address": "127.0.0.1",
  "device_locale": "sv_SE",
  "device_time": "",
  "app_version": "1.0.3",
  "app_build": "2.1.4",
  "has_permission_to_gps": true,
  "user_id": "Uqbz3",
  "os": "iOS",
  "os_version": "iOS 13.3.7",
  "battery_level": "100%",
  // Optional: 
  "json": {
        "product": "Live JSON generator",
        "version": 3.1,
        "releaseDate": "2014-06-25T00:00:00.000Z",
        "demo": true,
        "test": {
            "dob": "1992/10/31"
        }
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
