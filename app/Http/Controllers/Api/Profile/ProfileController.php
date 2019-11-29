<?php

namespace App\Http\Controllers\Api\Profile;


use \Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Users as ModelUsers;


class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $token = \request('token');

        if (!Auth::attempt(['token'=>$token])) {
            return response()->json([
                'message' => 'You cannot sign with those credentials',
                'errors' => 'Unauthorised'
            ], 401);
        }

        return response()->json([
            'check' => $request->user(),
        ]);
    }

    public function update(Request $request)
    {
        $id = \request('id');
        $user = Auth::user();
        $data = \request([
            'name',
            'real_name',
            'phone',
            'address',
            'avatar',
            'company',
            'company_spec',
            'requisites',
            'currency',
            'email',
        ]);

        $responseData = [
            'message' => 'Profile is updated',
            'errors' => false
        ];

        if ($id && $user->id === $id) {
            $result = ModelUsers::updateOne($data, $id);
            if (!$result) {
                $responseData['message'] = 'Profile update have internal error';
                $responseData['errors'] = true;
            }
        } else {
            $responseData['message'] = 'Identify id not recognized';
            $responseData['errors'] = true;
        }

        return response()->json(
            $responseData,
            $responseData['errors'] ? 401 : 200
        );
    }

    public function change(Request $request) {
        $data = $request->all();
        $user = Auth::guard('api')->user();

        $responseData = [
            'error' => false,
        ];

        if( isset($data['oldPassword']) && !empty($data['oldPassword']) && $data['oldPassword'] !== "" && $data['oldPassword'] !=='undefined') {
            $check  = Auth::guard('web')->attempt([
                'name' => $user->name,
                'password' => $data['oldPassword']
            ]);

            if($check && isset($data['newPassword']) && !empty($data['newPassword']) && $data['newPassword'] !== "" && $data['newPassword'] !=='undefined') {
                $user->password = bcrypt($data['newPassword']);
                $user->token()->revoke();
                $token = $user->createToken('newToken')->accessToken;
                $user->save();
                $responseData['token'] = $token;
            }
            else {
                $responseData['error'] = "Wrong password information";
            }
        }

        return response()->json($responseData, 200);
    }


}
